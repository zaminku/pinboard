# json.partial! "api/boards/board", board: @board

json.board do
    json.extract! @board, :id, :user_id, :name, :description
end

json.pins do
    @board.pins.each do |pin|
        json.set! pin.id do
            json.partial! '/api/pins/pin', pin: pin
        end
    end
end