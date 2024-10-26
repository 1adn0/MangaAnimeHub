from flask import Flask, render_template, request, redirect, url_for, session
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.secret_key = 'your_secret_key'  # Замени на случайный секретный ключ

# Настройки подключения к базе данных
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:12357895@localhost/manga_anime_db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# Пример модели (пользователь)
class User(db.Model):
    __tablename__ = 'users'
    user_id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), nullable=False, unique=True)
    password = db.Column(db.String(100), nullable=False)

# Маршрут для главной страницы
@app.route('/')
def home():
    return '<h1>Добро пожаловать на сайт аниме!</h1>'

if __name__ == '__main__':
    with app.app_context():
        db.create_all()  # Создаем таблицы в базе данных
    app.run(debug=True, use_reloader=False)