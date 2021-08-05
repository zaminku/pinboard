class Api::PinsController < ApplicationController
    
    def create
        @pin = Pin.new(pin_params)
        @pin.user_id = current_user.id
        @pin.photo_url.attach(params[:pin][:photoUrl])
        
        if @pin.save
            render "api/pins/show"
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
