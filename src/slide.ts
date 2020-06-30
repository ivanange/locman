export default function slideInit($duration = 6000, $position = 0) {
  let $aside,
    $length,
    $buttons,
    $direction,
    $previousPosition,
    $interval,
    $button,
    $i;
  $aside = document.getElementsByClassName("slide")[0];
  $length = $aside.children.length;
  $buttons = document.createElement("div");
  $buttons.classList.add("buttons-wrapper");
  $aside.appendChild($buttons);

  $direction = "";
  $previousPosition = 0;
  $interval = 0;

  function slide($direction, $position) {
    $direction = $direction.trim();
    $position =
      ($direction == "<"
        ? --$position
        : $direction == ">"
        ? ++$position
        : $position) % $length;
    $aside.scrollLeft = $position * $aside.clientWidth;
    return $position >= 0 ? $position : 0;
  }

  function slider() {
    $buttons.children[$position].classList.remove("button-active");
    $position = slide($direction, $position);
    $buttons.style.right = `-${100 * $position}%`;
    $buttons.children[$position].classList.add("button-active");
  }

  function startSlide($slide = false) {
    clearInterval($interval);

    $buttons.children[$previousPosition].classList.remove("button-active");
    $position = $slide ? slide($direction, $position) : $position;
    $buttons.style.right = `-${100 * $position}%`;
    $buttons.children[$position].classList.add("button-active");
    $direction = ">";
    $slide = false;
    $interval = setInterval(slider, $duration);
  }

  for ($i = 0; $i < $length; $i++) {
    $button = document.createElement("span");
    $button.id = $i;
    $button.classList.add("slide-button");
    $button.addEventListener("click", function ($e) {
      $previousPosition = $position;
      $position = $e.target.id;
      $direction = "";
      startSlide(true);
    });
    $buttons.appendChild($button);

    $aside.children[$i].addEventListener("click", function ($e) {
      $e.stopPropagation();
      clearInterval($interval);
      $previousPosition = $position;
      $direction =
        $e.target.getBoundingClientRect().left + $e.target.clientWidth / 2 >
        $e.clientX
          ? "<"
          : ">";
      startSlide(true);
    });

    $aside.children[$i].addEventListener("mouseover", function ($e) {
      $e.stopPropagation();
      clearInterval($interval);
    });

    $aside.children[$i].addEventListener("mouseout", function ($e) {
      $e.stopPropagation();
      clearInterval($interval);
      startSlide();
    });
  }

  // add active class to the slide with the given position
  $buttons.children[$position].classList.add("button-active");
  startSlide(true);
}
