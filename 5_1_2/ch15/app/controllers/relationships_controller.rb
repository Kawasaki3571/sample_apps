class RelationshipsController < ApplicationController
  before_action :logged_in_user

  # POST /relationships
  def create
    @user = User.find(params[:followed_id])
    @relationship = current_user.follow(@user) # DB 更新
    respond_to do |format|
      format.html { redirect_to @user }
      format.js # => app/views/relationships/create.js.erb
      format.json { render json: @relationship }
    end
  end
  
  # DELETE /relationships/:id
  def destroy
    @user = Relationship.find(params[:id]).followed
    current_user.unfollow(@user)
    respond_to do |format|
      format.html { redirect_to @user }
      format.js # => app/views/relationships/destroy.js.erb
      format.json { render json: nil }
    end
  end
end
