const Rating = () => {
  <div class="ratingBox">
    <div>
      <h1>User Rating</h1>
      <div class="starContainer">
        <div>
          <i class="fa fa-star-o starIcon" aria-hidden="true"></i>
        </div>
        <div>
          <i class="fa fa-star-o starIcon" aria-hidden="true"></i>
        </div>
        <div>
          <i class="fa fa-star-o starIcon" aria-hidden="true"></i>
        </div>
        <div>
          <i class="fa fa-star-o starIcon" aria-hidden="true"></i>
        </div>
        <div>
          <i class="fa fa-star-o starIcon" aria-hidden="true"></i>
        </div>
      </div>

      <p>4.1 average based on 254 reviews.</p>
    </div>

    <div class="barRatingContainer">
      <div class="ratingContainer rating-5">
        <div class="bar-container">
          <div class="bar-5"></div>
        </div>
        <div class="test">150</div>
      </div>
      <div class="ratingContainer rating-4">
        <div class="bar-container">
          <div class="bar-4"></div>
        </div>
        <div>150</div>
      </div>
      <div class="ratingContainer rating-3">
        <div class="bar-container">
          <div class="bar-3"></div>
        </div>
        <div>150</div>
      </div>
      <div class="ratingContainer rating-2">
        <div class="bar-container">
          <div class="bar-2"></div>
        </div>
        <div>150</div>
      </div>
      <div class="ratingContainer rating-1">
        <div class="bar-container">
          <div class="bar-1"></div>
        </div>
        <div>150</div>
      </div>
    </div>
  </div>;
};
