class Follow < ApplicationRecord
   belongs_to :target,
    class_name: :User,
    foreign_key: :target_id


  belongs_to :follower,
    class_name: :User,
    foreign_key: :follower_id
end
