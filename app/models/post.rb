class Post < ApplicationRecord
  validates :author_id, presence: true
  
  has_one_attached :photo

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

  has_many :likes,
    foreign_key: :post_id,
    class_name: :Like
  has_many :comments,
    foreign_key: :post_id,
    class_name: :Comment

  has_many :post_hashtags
  has_many :hashtags, through: :post_hashtags
  def hashtag_ids 
    self.hashtags.map { |hashtag| hashtag.id }
  end
  # has_many :likers,
  #   through: :likes,
  #   source: :user
  # has_many :comments,
  #   foreign_key: :post_id,
  #   class_name: :Comment
  # has_many :commentors,
  #   through: :comments,
  #   source: :author
end
