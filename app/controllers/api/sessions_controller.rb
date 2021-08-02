class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])

        if @user
            login(@user)
            render "api/users/show"
        else
            render json: ["Hmm, wrong email or password. Try again!"], status: 401
        end

    end

    def destroy
        @user = current_user
        if @user
            logout
            # console.log("bye, we signed you out!")
            render "api/users/show"
        else
            # console.log("nobody is signed in haha")
            render json: ["Nobody is signed in!"], status: 404
        end
    end
end
