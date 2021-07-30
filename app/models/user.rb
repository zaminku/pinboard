# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  age             :integer
#  bio             :string(160)
#  email           :string           not null
#  first_name      :string           not null
#  gender          :string
#  language        :string
#  last_name       :string           not null
#  location        :string
#  password_digest :string           not null
#  session_token   :string           not null
#  username        :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
# Indexes
#
#  index_users_on_email          (email) UNIQUE
#  index_users_on_first_name     (first_name)
#  index_users_on_last_name      (last_name)
#  index_users_on_session_token  (session_token) UNIQUE
#  index_users_on_username       (username) UNIQUE
#
class User < ApplicationRecord
    attr_reader :password
    before_validation :ensure_session_token

    validates :email, :username, :first_name, :last_name, :password_digest, :session_token, presence: true
    validates :email, :username, :session_token, uniqueness: true
    validates :password, length: {minimum: 6, allow_nil: true}
    validates :bio, allow_blank: true, length: {maximum: 160}
    validates :gender, inclusion: ['male', 'female', 'non-binary'], allow_blank: true

    def self.generate_session_token
        SecureRandom.urlsafe_base64
    end

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        if user && user.is_password?(password)
            return user
        else
            return nil
        end
    end

    def password=(password)
        self.password_digest = BCrypt::Password.create(password)
        @password = password
    end

    def is_password?(password)
        password_object = BCrypt::Password.new(self.password_digest)
        password_object.is_password?(password)
    end

    def reset_session_token!
        self.session_token = User.generate_session_token
        self.save!
        self.session_token
    end

    private

    def ensure_session_token
        self.session_token ||= User.generate_session_token
    end

end
