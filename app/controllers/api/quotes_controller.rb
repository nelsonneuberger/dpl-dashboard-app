class Api::QuotesController < ApplicationController
  before_action :set_quote, only: [:show, :update, :destroy ]
  
  def index
    render json: Quote.all
  end

  def show
    render json: Quote.rand
  end

  def create
    quote = Quote.new(quote_params)
    if quote.save
      render json: quote
    else
      render json: quote.errors, status: 422
    end
  end

  def update
    quote = Quote.update(quote_params)
    if quote.save
      render json: @quote
    else
      render json: @quote.errors, status: 422
    end
  end

  def destroy
    @quote.destroy
  end

  private

  def set_quote
    @quote = Quote.find(params[:id])
  end

  def quote_params
    params.require(:quote).permit(:author, :body, :category)
  end
end
