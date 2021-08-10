class Api::PinsController < ApplicationController

    # before_action :require_login, only: [:create, :update, :destroy]
    
    def create
        @pin = Pin.new(pin_params)
        @pin.user_id = current_user.id
        if params[:pin][:photo] != "null"
            @pin.photo.attach(params[:pin][:photo])
            if @pin.save
                render "api/pins/show"
            else
                render json: @pin.errors.full_messages, status: 422
            end
        else
            render json: ["No photo attached"], status: 422
        end
    end

    def update
        @pin = Pin.find_by(id: params[:id])
        if @pin && @pin.user_id == current_user.id
            if @pin.update(pin_params)
                render "api/pins/show"
            else
                render json: @pin.errors.full_messages, status: 422
            end
        else
            render json: @pin.errors.full_messages, status: 422
        end
    end

    def destroy
        @pin = Pin.find_by(id: params[:id])
        
        if @pin.user_id == current_user.id
            if @pin.destroy
                render json: ["Pin destroyed"]
            else
                render json: @pin.errors.full_messages, status: 422
            end
        else
            render json: @pin.errors.full_messages, status: 422
        end

    end
    
    def show
        @pin = Pin.find_by(id: params[:id])
        if @pin
            render "/api/pins/show"
        else
            render json: @pin.errors.full_messages, status: 422    
        end
    end

    def index
        @pins = Pin.all
        render "/api/pins/index"
    end


    private

    def pin_params
        params.require(:pin).permit(:user_id, :title, :description, :pin_url)
    end
end
