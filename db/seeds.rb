# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Pin.destroy_all

user1 = User.create!(email: 'sample@gmail.com', first_name: 'Sample', last_name: 'Name', password: '123456')

pin_url_1 = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/LeBron_James_Layup_%28Cleveland_vs_Brooklyn_2018%29.jpg/1920px-LeBron_James_Layup_%28Cleveland_vs_Brooklyn_2018%29.jpg"
pin_url_2 = "https://upload.wikimedia.org/wikipedia/commons/5/56/Kobe_Bryant_2014.jpg"
pin1 = Pin.create!(user_id: user1.id, title: 'LeBron', description: 'basketball', pin_url: pin_url_1)
pin2 = Pin.create!(user_id: user1.id, title: 'Kobe', description: 'basketball', pin_url: pin_url_2)