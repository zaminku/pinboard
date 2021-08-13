# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'
require 'net/http'

User.destroy_all
Pin.destroy_all

user1 = User.create(email: 'seeds@gmail.com', first_name: 'Seeds', last_name: 'Name', password: '123456')
user2 = User.create(email: 'sample@gmail.com', first_name: 'Sample', last_name: 'Name', password: '123456')

# file1 = open("https://pinboard-seeds.s3.us-east-2.amazonaws.com/elliott-engelmann-DjlKxYFJlTc-unsplash.jpg")
# pin1 = Pin.new(user_id: user1.id, title: 'sunset', description: 'wow')
# pin1.photo.attach(io: file1, filename: 'elliott-engelmann-DjlKxYFJlTc-unsplash.jpg')
# pin1.save!


# file2 = open("https://pinboard-seeds.s3.us-east-2.amazonaws.com/brianna-santellan-wK5lmJ_tDoc-unsplash.jpg")
# pin2 = Pin.new(user_id: user1.id, title: 'balloons', description: 'wow')
# pin2.photo.attach(io: file2, filename: 'https://pinboard-seeds.s3.us-east-2.amazonaws.com/brianna-santellan-wK5lmJ_tDoc-unsplash.jpg')
# pin2.save!

file1 = open("https://pinboard-seeds.s3.us-east-2.amazonaws.com/background1.jpg")
pin1 = Pin.new(user_id: user1.id, title: 'balloons', description: 'birthday')
pin1.photo.attach(io: file1, filename: 'background1.jpg')
pin1.save!

file2 = open("https://pinboard-seeds.s3.us-east-2.amazonaws.com/building1.jpg")
pin2 = Pin.new(user_id: user1.id, title: 'escalators', description: 'stairs are overrated')
pin2.photo.attach(io: file2, filename: 'building1.jpg')
pin2.save!

file3 = open("https://pinboard-seeds.s3.us-east-2.amazonaws.com/food1.jpg")
pin3 = Pin.new(user_id: user1.id, title: 'yum', description: '')
pin3.photo.attach(io: file3, filename: 'food1.jpg')
pin3.save!

file4 = open("https://pinboard-seeds.s3.us-east-2.amazonaws.com/sports1.jpeg")
pin4 = Pin.new(user_id: user1.id, title: 'kobe', description: 'laker')
pin4.photo.attach(io: file4, filename: 'sports1.jpeg')
pin4.save!

file5 = open("https://pinboard-seeds.s3.us-east-2.amazonaws.com/travel1.jpg")
pin5 = Pin.new(user_id: user1.id, title: 'road trip', description: '')
pin5.photo.attach(io: file5, filename: 'travel1.jpg')
pin5.save!

file6 = open("https://pinboard-seeds.s3.us-east-2.amazonaws.com/background2.jpeg")
pin6 = Pin.create(user_id: user1.id, title: 'vending machines', description: 'grab a snack')
pin6.photo.attach(io: file6, filename: 'https://pinboard-seeds.s3.us-east-2.amazonaws.com/background2.jpeg')
pin6.save!

file7 = open("https://pinboard-seeds.s3.us-east-2.amazonaws.com/building2.jpg")
pin7 = Pin.create(user_id: user1.id, title: 'hotel', description: 'cool windows')
pin7.photo.attach(io: file7, filename: 'building2.jpg')
pin7.save!

file8 = open("https://pinboard-seeds.s3.us-east-2.amazonaws.com/food2.jpg")
pin8 = Pin.create(user_id: user1.id, title: 'pancakes', description: 'breakfast with a side of fruit')
pin8.photo.attach(io: file8, filename: 'food2.jpg')
pin8.save!

file9 = open("https://pinboard-seeds.s3.us-east-2.amazonaws.com/sports2.jpeg")
pin9 = Pin.create(user_id: user1.id, title: 'Jordan', description: 'the GOAT')
pin9.photo.attach(io: file9, filename: 'sports2.jpeg')
pin9.save!

file10 = open("https://pinboard-seeds.s3.us-east-2.amazonaws.com/travel2.jpg")
pin10 = Pin.create(user_id: user1.id, title: 'mountains', description: 'I want to travel here')
pin10.photo.attach(io: file10, filename: 'travel2.jpg')
pin10.save!

file11 = open("https://pinboard-seeds.s3.us-east-2.amazonaws.com/background3.jpg")
pin11 = Pin.create(user_id: user1.id, title: 'camping', description: '')
pin11.photo.attach(io: file11, filename: 'background3.jpg')
pin11.save!

file12 = open("https://pinboard-seeds.s3.us-east-2.amazonaws.com/building3.jpg")
pin12 = Pin.create(user_id: user1.id, title: 'architecture', description: '')
pin12.photo.attach(io: file12, filename: 'building3.jpg')
pin12.save!

file13 = open("https://pinboard-seeds.s3.us-east-2.amazonaws.com/food3.jpg")
pin13 = Pin.create(user_id: user1.id, title: 'fries', description: 'no ketchup')
pin13.photo.attach(io: file13, filename: 'food3.jpg')
pin13.save!

file14 = open("https://pinboard-seeds.s3.us-east-2.amazonaws.com/sports3.jpeg")
pin14 = Pin.create(user_id: user1.id, title: 'Hakeem', description: 'The Dream')
pin14.photo.attach(io: file14, filename: 'sports3.jpeg')
pin14.save!

file15 = open("https://pinboard-seeds.s3.us-east-2.amazonaws.com/travel3.jpg")
pin15 = Pin.create(user_id: user1.id, title: 'Santorini', description: 'what a view')
pin15.photo.attach(io: file15, filename: 'travel3.jpg')
pin15.save!

file16 = open("https://pinboard-seeds.s3.us-east-2.amazonaws.com/building4.jpg")
pin16 = Pin.create(user_id: user1.id, title: 'stairs', description: 'working hard')
pin16.photo.attach(io: file16, filename: 'building4.jpg')
pin16.save!

file17 = open("https://pinboard-seeds.s3.us-east-2.amazonaws.com/food4.jpg")
pin17 = Pin.create(user_id: user1.id, title: 'mushrooms', description: "you're a fungi")
pin17.photo.attach(io: file17, filename: 'food4.jpg')
pin17.save!

file18 = open("https://pinboard-seeds.s3.us-east-2.amazonaws.com/sports4.jpeg")
pin18 = Pin.create(user_id: user1.id, title: 'Harden', description: 'Beard')
pin18.photo.attach(io: file18, filename: 'sports4.jpeg')
pin18.save!

file19 = open("https://pinboard-seeds.s3.us-east-2.amazonaws.com/travel4.jpg")
pin19 = Pin.create(user_id: user1.id, title: 'Sahara', description: 'camels and sand dunes')
pin19.photo.attach(io: file19, filename: 'travel4.jpg')
pin19.save!

file20 = open("https://pinboard-seeds.s3.us-east-2.amazonaws.com/building5.jpg")
pin20 = Pin.create(user_id: user1.id, title: 'bridge', description: 'some cool architecture')
pin20.photo.attach(io: file20, filename: 'building5.jpg')
pin20.save!

file21 = open("https://pinboard-seeds.s3.us-east-2.amazonaws.com/food5.jpg")
pin21 = Pin.create(user_id: user1.id, title: 'healthy choice', description: 'also tastes good')
pin21.photo.attach(io: file21, filename: 'food5.jpg')
pin21.save!

file22 = open("https://pinboard-seeds.s3.us-east-2.amazonaws.com/sports5.jpeg")
pin22 = Pin.create(user_id: user1.id, title: 'Brady', description: '')
pin22.photo.attach(io: file22, filename: 'sports5.jpeg')
pin22.save!

file23 = open("https://pinboard-seeds.s3.us-east-2.amazonaws.com/travel5.jpg")
pin23 = Pin.create(user_id: user1.id, title: 'mountains', description: 'future hiking trip')
pin23.photo.attach(io: file23, filename: 'travel5.jpg')
pin23.save!

file24 = open("https://pinboard-seeds.s3.us-east-2.amazonaws.com/building6.jpg")
pin24 = Pin.create(user_id: user1.id, title: 'long hallway', description: '')
pin24.photo.attach(io: file24, filename: 'building6.jpg')
pin24.save!

file25 = open("https://pinboard-seeds.s3.us-east-2.amazonaws.com/food6.jpg")
pin25 = Pin.create(user_id: user1.id, title: 'noodles', description: 'future recipe idea')
pin25.photo.attach(io: file25, filename: 'food6.jpg')
pin25.save!

file26 = open("https://pinboard-seeds.s3.us-east-2.amazonaws.com/sports6.jpeg")
pin26 = Pin.create(user_id: user1.id, title: 'Pele and Muhammad Ali', description: '2 GOATs, 1 pic')
pin26.photo.attach(io: file26, filename: 'sports6.jpeg')
pin26.save!

file27 = open("https://pinboard-seeds.s3.us-east-2.amazonaws.com/travel6.jpg")
pin27 = Pin.create(user_id: user1.id, title: 'backpacking', description: '')
pin27.photo.attach(io: file27, filename: 'travel6.jpg')
pin27.save!

file28 = open("https://pinboard-seeds.s3.us-east-2.amazonaws.com/building7.jpg")
pin28 = Pin.create(user_id: user1.id, title: 'stairs and entrance', description: '')
pin28.photo.attach(io: file28, filename: 'building7.jpg')
pin28.save!

file29 = open("https://pinboard-seeds.s3.us-east-2.amazonaws.com/food7.jpg")
pin29 = Pin.create(user_id: user1.id, title: 'burger', description: 'fresh ingredients')
pin29.photo.attach(io: file29, filename: 'food7.jpg')
pin29.save!

file30 = open("https://pinboard-seeds.s3.us-east-2.amazonaws.com/sports7.jpeg")
pin30 = Pin.create(user_id: user1.id, title: 'block', description: 'hoops')
pin30.photo.attach(io: file30, filename: 'sports7.jpeg')
pin30.save!

file31 = open("https://pinboard-seeds.s3.us-east-2.amazonaws.com/travel7.jpg")
pin31 = Pin.create(user_id: user1.id, title: 'Europe travel ideas', description: '')
pin31.photo.attach(io: file31, filename: 'travel7.jpg')
pin31.save!

# file2 = open("")
# pin2 = Pin.create(user_id: user1.id, title: '', description: '')
# pin2.photo.attach(io: file2, filename: '')
# pin2.save!

# file2 = open("")
# pin2 = Pin.create(user_id: user1.id, title: '', description: '')
# pin2.photo.attach(io: file2, filename: '')
# pin2.save!

# file2 = open("")
# pin2 = Pin.create(user_id: user1.id, title: '', description: '')
# pin2.photo.attach(io: file2, filename: '')
# pin2.save!

# file2 = open("")
# pin2 = Pin.create(user_id: user1.id, title: '', description: '')
# pin2.photo.attach(io: file2, filename: '')
# pin2.save!

# file2 = open("")
# pin2 = Pin.create(user_id: user1.id, title: '', description: '')
# pin2.photo.attach(io: file2, filename: '')
# pin2.save!

# file2 = open("")
# pin2 = Pin.create(user_id: user1.id, title: '', description: '')
# pin2.photo.attach(io: file2, filename: '')
# pin2.save!



