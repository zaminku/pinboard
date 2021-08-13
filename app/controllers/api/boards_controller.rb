class Api::BoardsController < ApplicationController

    # before_action :require_login, only: [:create, :update, :destroy]
    
    def create
        @board = Board.new(board_params)
        @board.user_id = current_user.id
        
        if @board.save
            render "api/boards/show"
        else
            render json: @board.errors.full_messages, status: 422
        end
    end
    
    def update
        @board = Board.find_by(id: params[:id])
        if @board && @board.user_id == current_user.id
            if @board.update(board_params)
                render "api/boards/show"
            else    
                render json: @board.errors.full_messages, status: 422
            end
        else
            render json: @board.errors.full_messages, status: 422
        end 
    end
    
    def destroy
        @board = Board.find_by(id: params[:id])

        if @board.user_id == current_user.id
            if @board.destroy
                render json: ["Board destroyed"]
            else
                render json: @board.errors.full_messages, status: 422
            end
        else
            render json @board.errors.full_messages, status: 422
        end
    end

    def show
        @board = Board.find_by(id: params[:id])
        if @board
            render "/api/boards/show"
        else
            render json: @board.errors.full_messages, status: 422
        end 
    end

    def index
        @boards = Board.all #.where(user_id: current_user.id) or .where(user_id: params[:user_id])
        render "/api/boards/index"
    end

    private

    def board_params
        params.require(:board).permit(:user_id, :name, :description)
    end
end
