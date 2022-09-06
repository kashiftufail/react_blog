class Post < ApplicationRecord
  validates :title, presence: true, length: {minimum: 10 , maximum: 50}
  
  validates :content, presence: true, length: { minimum: 20 , maximum: 300 }
  has_many :comments, dependent: :destroy
  default_scope  { order(created_at: :desc) }
end
