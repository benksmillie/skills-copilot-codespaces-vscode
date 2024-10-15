function skillsMember() {
  const member = document.querySelector(".member");
  const skills = member.querySelector(".skills");
  const skillItems = Array.from(skills.querySelectorAll(".item"));
  const skillsList = skills.querySelector(".list");

  const toggleSkills = () => {
    skills.classList.toggle("open");
  }

  skillItems.forEach((item) => {
    item.addEventListener("click", toggleSkills);
  });

  // Close skills list when clicking outside of the menu
  document.addEventListener("click", (e) => {
    if (skills.classList.contains("open") && !skills.contains(e.target)) {
      toggleSkills();
    }
  });
}