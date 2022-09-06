class Api::V1::CommentsController < ApplicationController
  before_action :set_post, only: %i[index create]

  
  def index
    @comments = @post.comments
    render json: [@post , @comments]
  end

  
  def create
    @comment = @post.comments.create(comment_params)

    
    if @comment.save
      render json: @post.comments, status: :created, location: api_v1_post_comment_path(@post,@comment)
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  
    def comment_params
    params.require(:comment).permit(:post_id, :content)
  end


 
  private

  def set_post
    @post = Post.find(params[:post_id])
  end  

end
