class Api::LikesController < ApplicationController
    def create 
    @like = Like.new(post_id: params[:post_id].to_i)
    @like.user_id = current_user.id
    if @like.save
      if params[:kind] == "indexitem"
        @posts = feed
        render "api/posts/index"
      elsif params[:kind] == "explore"
        @posts = explore
        render "api/posts/index"
      elsif params[:kind][0..6] == "hashtag"
        post_ids = Hashtag.find_by(id: params[:kind][7..-1].to_i).posts.map { |post| post.id }
        @posts = Post.where(id: post_ids)
        render "api/posts/index"
      else
        @posts = Post.where(author_id: params[:kind].to_i)
        render "api/posts/index"
      end
    else
      render json: @like.errors.full_messages, status: 422
    end
  end


  def destroy 
    @like = Like.find_by(user_id: current_user.id, post_id: params[:id])

    # @like = Like.where(user_id: current_user.id).where(post_id: params[:id])[0]
    if @like.destroy
      if params[:kind] == "indexitem"
        @posts = feed
        render "api/posts/index"
      elsif params[:kind] == "explore"
        @posts = explore
        render "api/posts/index"
      elsif params[:kind][0..6] == "hashtag"
        post_ids = Hashtag.find_by(id: params[:kind][7..-1].to_i).posts.map { |post| post.id }
        @posts = Post.where(id: post_ids)
        render "api/posts/index"
      else
        @posts = Post.where(author_id: params[:kind].to_i)
        render "api/posts/index"
      end
    else
      render :json, @like.errors.full_messages, status: 404
    end
  end 
  # def like_params
  #   params.require(:like).permit(:post_id, :user_id)
  # end
end
