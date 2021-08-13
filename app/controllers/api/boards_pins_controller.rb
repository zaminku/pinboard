class Api::BoardsPinsController < ApplicationController

    def create
        @boards_pin = BoardsPin.create(boards_pins_params)
        if @boards_pin.save
            render json: @boards_pin
        else
            render json: @boards_pin.errors.full_messages, status: 422
        end 
    end

    def index
        @boards_pins = BoardsPin.all
        render "/api/boards_pins/index"
    end

    def destroy
        @boards_pin = Board.find_by(id: params[:id])

        # board association
        if @boards_pin.board.user_id == current_user.id
            if @boards_pin.destroy
                render json: ["Board's pin destroyed"]
            else
                render json: @boards_pin.errors.full_messages, status: 422
            end
        else
            render json: @boards_pin.errors.full_messages, status: 422
        end
    end

    private

    def boards_pins_params
        params.require(:boards_pin).permit(:board_id, :pin_id)
    end
end
