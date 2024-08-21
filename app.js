const headerSection = () => {
  const header = document.createElement("div");
  header.classList.add("header");

  const leftHeaderSection = document.createElement("div");
  leftHeaderSection.classList.add("left-header-section");

  const img = document.createElement("img");
  img.src = "img/Ninja Turtles icon.svg";
  img.classList.add("logo");

  const p = document.createElement("p");
  p.innerHTML = "AI ALLY";

  const menuItems = [
    { text: "Home", href: "#" },
    { text: "Features", href: "#" },
    { text: "Pricing", href: "#" },
    { text: "Testimonials", href: "#" },
  ];

  const ul = document.createElement("ul");
  ul.style.display = "flex";
  ul.style.gap = "20px";
  ul.style.padding = "0";
  ul.style.margin = "0";

  menuItems.forEach((item) => {
    const li = document.createElement("li");
    li.style.cursor = "pointer";

    const a = document.createElement("a");
    a.textContent = item.text;
    a.href = item.href;
    a.style.textDecoration = "none";
    a.style.color = "#131313";

    a.addEventListener("mouseover", () => {
      a.style.color = "#6e6e6e";
    });

    a.addEventListener("mouseout", () => {
      a.style.color = "#131313";
    });

    ul.appendChild(li);
    li.appendChild(a);
  });

  const centerHeaderSection = document.createElement("div");
  centerHeaderSection.classList.add("center-header-section");

  const rightHeaderSection = document.createElement("div");
  rightHeaderSection.classList.add("right-header-section");

  const button = document.createElement("button");
  button.classList.add("button");
  button.innerHTML = "sign in";

  // appendChild
  document.body.appendChild(header);
  header.appendChild(leftHeaderSection);
  leftHeaderSection.appendChild(img);
  leftHeaderSection.appendChild(p);

  header.appendChild(centerHeaderSection);
  centerHeaderSection.appendChild(ul);

  header.appendChild(rightHeaderSection);
  rightHeaderSection.appendChild(button);
};

headerSection();

const heroSection = () => {
  const heroSection = document.createElement("div");
  heroSection.classList.add("heroSection");

  const text = document.createElement("div");
  text.classList.add("text");

  const h1 = document.createElement("h1");
  h1.innerHTML = "Unleash the full potential of AI";

  const p = document.createElement("p");
  p.innerHTML =
    "AI Ally is a versatile assistant that utilizes state-of-the-art natural language processing to provide real-time support and assistance across various domains.";

  const buttonsContainer = document.createElement("div");
  buttonsContainer.classList.add("buttons");

  const menuItems = [
    { text: "Get the App", href: "#", class: "btn green" },
    { text: "More", href: "#", class: "btn" },
  ];

  menuItems.forEach((item) => {
    const a = document.createElement("a");
    a.textContent = item.text;
    a.href = item.href;
    a.className = item.class;

    // اگر کلاس "btn green" باشد، آیکون فلش اضافه کنید
    if (item.class.includes("green")) {
      const icon = document.createElement("i");
      icon.classList.add("fa-solid", "fa-arrow-right");
      a.appendChild(icon);
    }

    buttonsContainer.appendChild(a);
  });

  const stats = document.createElement("div");
  stats.classList.add("stats");

  const statItems = [
    { value: "4.8", description: "Rating on AppStore" },
    { value: "700k+", description: "Active users" },
  ];

  statItems.forEach((item) => {
    const div = document.createElement("div");
    div.innerHTML = item.value;

    const span = document.createElement("span");
    span.innerHTML = item.description;

    div.appendChild(document.createElement("br"));
    div.appendChild(span);

    stats.appendChild(div);
  });

  const imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");

  const img = document.createElement("img");
  img.src = "img/Ai-Ally-phone.png";

  // Append elements in the correct order
  heroSection.appendChild(text);
  text.appendChild(h1);
  text.appendChild(p);
  text.appendChild(buttonsContainer);
  text.appendChild(stats);

  heroSection.appendChild(imgContainer);
  imgContainer.appendChild(img);

  document.body.appendChild(heroSection);
};

heroSection();
