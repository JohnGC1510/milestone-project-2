let gameOneScore = sessionStorage.getItem("gameOneScore");
let gameTwoScore = sessionStorage.getItem("gameTwoScore");

$("#results-button").on("click", function () {
  if (gameOneScore == null && gameTwoScore == null) {
    $("#results-modal").removeClass("hidden");
    $("#results-modal-txt").html(
      "You have yet to attempt a game! Please attempt game 1 and game 2 and then check your results."
    );
    $(".close-btn").on("click", function () {
      $("#results-modal").addClass("hidden");
    });
  } else if (gameOneScore !== null && gameTwoScore == null) {
    $("#results-modal").removeClass("hidden");
    $("#results-modal-txt").html(
      `Your score for game 1 was ${gameOneScore} to allow us to give you a total result please play game 2`
    );
    $(".close-btn").on("click", function () {
      $("#results-modal").addClass("hidden");
    });
  } else if (gameOneScore == null && gameTwoScore !== null) {
    $("#results-modal").removeClass("hidden");
    $("#results-modal-txt").html(
      `Your score for game 2 was ${gameTwoScore} to allow us to give you a total result please play game 1`
    );
    $(".close-btn").on("click", function () {
      $("#results-modal").addClass("hidden");
    });
  } else {
    let result =
      Number.parseInt(gameTwoScore) * 2 - Number.parseInt(gameOneScore); //minimum score for gameOne is 8
    if (result > 0) {
      $("#results-modal").removeClass("hidden");
      $("#results-modal-txt").html(
        `Our algorithm gives you a total score of ${result} currently you are not showing signs of short term memory issues.`
      );
      $(".close-btn").on("click", function () {
        $("#results-modal").addClass("hidden");
      });
    } else {
      $("#results-modal").removeClass("hidden");
      $("#results-modal .modal-content").css("padding-top", "0px");
      $("#results-modal-txt")
        .html(`Our algorithm gives you a total score of ${result}, these results inidcate you may have short-term memory issues and should seek support.
             Please check our support page to see options available to you`);
      $(".close-btn").on("click", function () {
        $("#results-modal").addClass("hidden");
      });
    }
  }
});
