@boards_pins.each do |boards_pin|
    json.set! boards_pin.id do
        json.extract! boards_pin, :board_id, :pin_id
    end
end