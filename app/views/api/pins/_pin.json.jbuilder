json.extract! pin, :id ,:user_id, :title, :description, :pin_url
json.photoUrl url_for(pin.photo)