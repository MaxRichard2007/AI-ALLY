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

const destinationSection = () => {
  const destinationSection = document.createElement("div");
  destinationSection.classList.add("differentDes");

  const h1 = document.createElement("h1");
  h1.innerHTML = "Different destinations";

  const paragraph = () => {
    const paragraph = document.createElement("div");
    paragraph.classList.add("paragraph");

    const text = document.createElement("div");
    text.classList.add("text");
    text.innerHTML =
      "We explore the diverse ways in which this technology can revolutionize work across various industries and fields.";

    const text2 = document.createElement("div");
    text2.classList.add("text2");
    text2.innerHTML =
      "Discover how AI can streamline processes and elevate your work to new heights.";

    const text3 = document.createElement("div");
    text3.classList.add("text3");
    text3.innerHTML = "Discover all applications";

    const img = document.createElement("img");
    img.src = "./img/up-right-arrow.png";

    paragraph.appendChild(text);
    paragraph.appendChild(text2);
    paragraph.appendChild(text3);
    text3.appendChild(img);

    return paragraph;
  };

  const paragraphFun = paragraph();

  const imageContainer = () => {
    const imageContainer = document.createElement("div");
    imageContainer.classList.add("imageContainer");

    const image = () => {
      const image = document.createElement("div");
      image.classList.add("image");

      const img = document.createElement("img");
      img.src = "./img/girl-studying.jpeg";

      const button = document.createElement("button");
      button.classList.add("buttonInImage");
      button.innerHTML = "Try it now";

      image.appendChild(img);
      image.appendChild(button);
      return image;
    };
    const imageFun = image();

    const image2 = () => {
      const image = document.createElement("div");
      image.classList.add("image");

      const img = document.createElement("img");
      img.src = "./img/boys-studying.jpg";

      const button = document.createElement("button");
      button.classList.add("buttonInImage");
      button.innerHTML = "Try it now";

      image.appendChild(img);
      image.appendChild(button);
      return image;
    };
    const image2Fun = image2();

    const image3 = () => {
      const image = document.createElement("div");
      image.classList.add("image");

      const img = document.createElement("img");
      img.src = "./img/girl-studying-2.jpg";

      const button = document.createElement("button");
      button.classList.add("buttonInImage");
      button.innerHTML = "Try it now";

      image.appendChild(img);
      image.appendChild(button);
      return image;
    };
    const image3Fun = image3();

    imageContainer.appendChild(imageFun);
    imageContainer.appendChild(image2Fun);
    imageContainer.appendChild(image3Fun);
    return imageContainer;
  };

  const imageContainerFun = imageContainer();

  const secondParagraph = () => {
    const secondParagraph = document.createElement("div");
    secondParagraph.classList.add("secondParagraph");

    const text = () => {
      const text = document.createElement("div");
      text.classList.add("text");

      const h2 = document.createElement("h2");
      h2.innerHTML = "Students";

      const p = document.createElement("p");
      p.innerHTML =
        "AI Ally can assist in research, provide learning materials, and aswer questions";

      text.appendChild(h2);
      text.appendChild(p);
      return text;
    };
    const textFun = text();

    const text2 = () => {
      const text = document.createElement("div");
      text.classList.add("text2");

      const h2 = document.createElement("h2");
      h2.innerHTML = "Professionals";

      const p = document.createElement("p");
      p.innerHTML =
        "AL Ally can provide quick access to relevant information and offer data analysis insights";

      text.appendChild(h2);
      text.appendChild(p);
      return text;
    };
    const text2Fun = text2();

    const text3 = () => {
      const text = document.createElement("div");
      text.classList.add("text3");

      const h2 = document.createElement("h2");
      h2.innerHTML = "Writes";

      const p = document.createElement("p");
      p.innerHTML =
        "AI Ally can help writes by generating ideas, suggesting imporvements in writing style";

      text.appendChild(h2);
      text.appendChild(p);
      return text;
    };
    const text3Fun = text3();

    secondParagraph.appendChild(textFun);
    secondParagraph.appendChild(text2Fun);
    secondParagraph.appendChild(text3Fun);
    return secondParagraph;
  };
  const secondParagraphFun = secondParagraph();

  const buttonBoxes = () => {
    const buttonBox = document.createElement("div");
    buttonBox.classList.add("button-box");

    const button = document.createElement("button");
    button.innerHTML = "And more than 50 other destinations";

    buttonBox.appendChild(button);
    return buttonBox;
  };
  const buttonBoxesFun = buttonBoxes();

  document.body.appendChild(destinationSection);
  destinationSection.appendChild(h1);
  destinationSection.appendChild(paragraphFun);
  destinationSection.appendChild(imageContainerFun);
  destinationSection.appendChild(secondParagraphFun);
  destinationSection.appendChild(buttonBoxesFun);
};

destinationSection();

const appContainer = () => {
  const appContainer = document.createElement("div");
  appContainer.classList.add("appContainer");

  const row = document.createElement("div");
  row.classList.add("row");

  const profileImgFun = () => {
    const profileImgFun = document.createElement("div");
    profileImgFun.classList.add("profileImg");

    const img = document.createElement("img");
    img.src = "img/ChatWithBakerySupport.jpg";

    profileImgFun.appendChild(img);
    return profileImgFun;
  };
  const profileImg = profileImgFun();

  const chatContainerFun = () => {
    const chatContainer = document.createElement("div");
    chatContainer.classList.add("chatContainer");

    const menuItems = () => {
      const menuItem = document.createElement("div");
      menuItem.classList.add("menuItem");

      const span = document.createElement("span");

      const i = document.createElement("i");
      i.classList.add("fa-solid", "fa-magnifying-glass");

      span.appendChild(i);

      span.innerHTML += " Finding information";

      menuItem.appendChild(span);
      return menuItem;
    };

    const menuItemFun = menuItems();

    const menuItemsSel = () => {
      const menuItem = document.createElement("div");
      menuItem.classList.add("menuItem", "selected");

      const span = document.createElement("span");

      const i = document.createElement("i");
      i.classList.add("fa-solid", "fa-pen-nib");

      span.appendChild(i);

      span.innerHTML += " Help for designers";

      const p = document.createElement("p");
      p.innerHTML =
        "AI-powered applications can analyze vast amounts of visual data and provide designers with inspiration for their creative projects.";

      menuItem.appendChild(span);
      menuItem.appendChild(p);

      return menuItem;
    };

    const menuItemSel = menuItemsSel();

    const menuItems3 = () => {
      const menuItem = document.createElement("div");
      menuItem.classList.add("menuItem");

      const span = document.createElement("span");

      const i = document.createElement("i");
      i.classList.add("fa-solid", "fa-house-chimney");

      span.appendChild(i);

      span.innerHTML += " Home automation";

      menuItem.appendChild(span);
      return menuItem;
    };

    const menuItem3Fun = menuItems3();

    const menuItems4 = () => {
      const menuItem = document.createElement("div");
      menuItem.classList.add("menuItem");

      const span = document.createElement("span");

      const i = document.createElement("i");
      i.classList.add("fa-brands", "fa-youtube");

      span.appendChild(i);

      span.innerHTML += " Entertainment";

      menuItem.appendChild(span);
      return menuItem;
    };

    const menuItems4Fun = menuItems4();

    const menuItems5 = () => {
      const menuItem = document.createElement("div");
      menuItem.classList.add("menuItem");

      const span = document.createElement("span");

      const i = document.createElement("i");
      i.classList.add("fa-solid", "fa-calendar-days");

      span.appendChild(i);

      span.innerHTML += " Planning assistance";

      menuItem.appendChild(span);
      return menuItem;
    };

    const menuItems5Fun = menuItems5();

    chatContainer.appendChild(menuItemFun);
    chatContainer.appendChild(menuItemSel);
    chatContainer.appendChild(menuItem3Fun);
    chatContainer.appendChild(menuItems4Fun);
    chatContainer.appendChild(menuItems5Fun);

    return chatContainer;
  };
  const chatContainer = chatContainerFun();

  document.body.appendChild(appContainer);
  appContainer.appendChild(row);
  row.appendChild(profileImg);
  row.appendChild(chatContainer);
};

appContainer();
