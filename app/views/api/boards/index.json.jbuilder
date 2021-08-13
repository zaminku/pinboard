@boards.each do |board|
    json.set! board.id do
        # json.partial! '/api/boards/board', board: board
        json.extract! board, :id, :user_id, :name, :description
    end
end