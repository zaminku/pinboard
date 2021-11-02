class Api::CommentsController < ApplicationController

    def create
        @comment = Comment.new(comment_params)
        @comment.user_id = current_user.id

        if @comment.save  
            render "api/comments/show"
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def destroy
        @comment = Comment.find_by(id: params[:id])

        if @comment.user_id == current_user.id
            if @comment.destroy
                render json: ["Comment destroyed"]
            else
                render json: @comment.errors.full_messages, status: 422
            end
        else
            render json @comment.errors.full_messages, status: 422
        end
    end

    def show
        @comment = Comment.find_by(id: params[:id])
        if @comment
            render "/api/comments/show"
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def index
        @comments = Comment.all
        render "/api/comments/index"
    end

    # def update

    private

    def comment_params
        params.require(:comment).permit(:user_id, :pin_id, :text)
    end
end
