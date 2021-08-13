# == Schema Information
#
# Table name: boards_pins
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  board_id   :integer          not null
#  pin_id     :integer          not null
#
# Indexes
#
#  index_boards_pins_on_pin_id_and_board_id  (pin_id,board_id) UNIQUE
#
class BoardsPin < ApplicationRecord
    validates :board_id, :pin_id, presence: true

    belongs_to :board,
        foreign_key: :board_id,
        class_name: :Board
    
    belongs_to :pin,
        foreign_key: :pin_id,
        class_name: :Pin
end
