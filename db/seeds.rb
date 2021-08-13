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

user1 = User.create(email: 'sample@gmail.com', first_name: 'Sample', last_name: 'Name', password: '123456')

file1 = open("https://pinboard-seeds.s3.us-east-2.amazonaws.com/elliott-engelmann-DjlKxYFJlTc-unsplash.jpg")
pin1 = Pin.new(user_id: user1.id, title: 'sunset', description: 'wow')
pin1.photo.attach(io: file1, filename: 'elliott-engelmann-DjlKxYFJlTc-unsplash.jpg')
pin1.save!


file2 = open("https://pinboard-seeds.s3.us-east-2.amazonaws.com/brianna-santellan-wK5lmJ_tDoc-unsplash.jpg")
pin2 = Pin.new(user_id: user1.id, title: 'balloons', description: 'wow')
pin2.photo.attach(io: file2, filename: 'https://pinboard-seeds.s3.us-east-2.amazonaws.com/brianna-santellan-wK5lmJ_tDoc-unsplash.jpg')
pin2.save!

# file1 = open("")
# pin1 = Pin.create(user_id: user1.id, title: '', description: '')
# pin1.photo.attach(io: file1, filename: '')
