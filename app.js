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

const testimonials = () => {
  const testimonials = document.createElement("div");
  testimonials.classList.add("testimonials");

  const textBoxFun = () => {
    const textBox = document.createElement("div");
    textBox.classList.add("textBox");

    const testimonialsFun = () => {
      const Testimonials = document.createElement("div");
      Testimonials.classList.add("Testimonials");

      const h1 = document.createElement("h1");
      h1.innerHTML = "Testimonials";

      Testimonials.appendChild(h1);
      return Testimonials;
    };

    const testimonials = testimonialsFun();

    const secondTextBoxFun = () => {
      const secondTextBox = document.createElement("div");
      secondTextBox.classList.add("secondTextBox");

      const p = document.createElement("p");
      p.classList.add("testimonialsP");
      p.innerHTML =
        "Don't just take our word for it - hear from our satishied clients who have experienced the transformative impact of our AI text tool.";

      secondTextBox.appendChild(p);
      return secondTextBox;
    };

    const secondTextBox = secondTextBoxFun();

    const thirdTextBoxFun = () => {
      const thirdTextBox = document.createElement("div");
      thirdTextBox.classList.add("thirdTextBox");

      const p = document.createElement("p");
      p.classList.add("testimonialsP");
      p.innerHTML =
        "Learn how this powerful tool has revolutionized their work and accelerated their success.";

      thirdTextBox.appendChild(p);
      return thirdTextBox;
    };

    const thirdTextBox = thirdTextBoxFun();

    textBox.appendChild(testimonials);
    textBox.appendChild(secondTextBox);
    textBox.appendChild(thirdTextBox);
    return textBox;
  };
  const textBox = textBoxFun();

  const boxesFun = () => {
    const boxes = document.createElement("div");
    boxes.classList.add("boxes");

    const firstBoxFun = () => {
      const firstBox = document.createElement("div");
      firstBox.classList.add("firstBox");

      const p = document.createElement("p");
      p.classList.add("paragraph");
      p.innerHTML = `"The excellent voice recognition quality of AI Ally app makes it perfect for dictation and note taking. I have never come across such accuracy before"`;

      const imgProfileBoxFun = () => {
        const imgProfileBox = document.createElement("div");
        imgProfileBox.classList.add("imgProfileBox");

        const img = document.createElement("img");
        img.src = "img/girl.jpeg";

        const informationBoxFun = () => {
          const informationBox = document.createElement("informationBox");
          informationBox.classList.add("informationBox");

          const p = document.createElement("p");
          p.innerHTML = "Craig Jordan";

          const p2 = document.createElement("p");
          p2.innerHTML = "CEO, Aveva";

          informationBox.appendChild(p);
          informationBox.appendChild(p2);
          return informationBox;
        };

        const informationBox = informationBoxFun();

        imgProfileBox.appendChild(img);
        imgProfileBox.appendChild(informationBox);
        return imgProfileBox;
      };
      const imgProfileBox = imgProfileBoxFun();

      firstBox.appendChild(p);
      firstBox.appendChild(imgProfileBox);
      return firstBox;
    };
    const firstBox = firstBoxFun();

    const secondBoxFun = () => {
      const secondBox = document.createElement("div");
      secondBox.classList.add("secondBox");

      const p = document.createElement("p");
      p.classList.add("paragraph");
      p.innerHTML = `"With the help of AI Ally, my work has become much easier and efficient. It provides quick and accurate answers to any questions I come across"`;

      const imgProfileBoxFun = () => {
        const imgProfileBox = document.createElement("div");
        imgProfileBox.classList.add("imgProfileBox");

        const img = document.createElement("img");
        img.src = "img/guys.jpg";

        const informationBoxFun = () => {
          const informationBox = document.createElement("div");
          informationBox.classList.add("informationBox");

          const p = document.createElement("p");
          p.innerHTML = "David Smith";

          const p2 = document.createElement("p");
          p2.innerHTML = "Head of HR, Instill";

          informationBox.appendChild(p);
          informationBox.appendChild(p2);
          return informationBox;
        };

        const informationBox = informationBoxFun();

        imgProfileBox.appendChild(img);
        imgProfileBox.appendChild(informationBox);
        return imgProfileBox;
      };

      const imgProfileBox = imgProfileBoxFun();

      secondBox.appendChild(p);
      secondBox.appendChild(imgProfileBox);
      return secondBox;
    };
    const secondBox = secondBoxFun();

    const thirdBoxFun = () => {
      const thirdBox = document.createElement("div");
      thirdBox.classList.add("thirdBox");

      const p = document.createElement("p");
      p.classList.add("paragraph");
      p.innerHTML = `"I love how AI ally personalizes to my needs and offers recommendations and solutions based on my perferences and behaviors"`;

      const imgProfileBoxFun = () => {
        const imgProfileBox = document.createElement("div");
        imgProfileBox.classList.add("imgProfileBox");

        const img = document.createElement("img");
        img.src = "img/faceOfGuy2.jpeg";

        const informationBoxFun = () => {
          const informationBox = document.createElement("div");
          informationBox.classList.add("informationBox");

          const p = document.createElement("p");
          p.innerHTML = "Marilyn Long";

          const p2 = document.createElement("p");
          p2.innerHTML = "UX Designer, Cyber Unit";

          informationBox.appendChild(p);
          informationBox.appendChild(p2);
          return informationBox;
        };

        const informationBox = informationBoxFun();

        imgProfileBox.appendChild(img);
        imgProfileBox.appendChild(informationBox);
        return imgProfileBox;
      };

      const imgProfileBox = imgProfileBoxFun();

      thirdBox.appendChild(p);
      thirdBox.appendChild(imgProfileBox);
      return thirdBox;
    };
    const thirdBox = thirdBoxFun();

    boxes.appendChild(firstBox);
    boxes.appendChild(secondBox);
    boxes.appendChild(thirdBox);
    return boxes;
  };

  const boxes = boxesFun();

  document.body.appendChild(testimonials);
  testimonials.appendChild(textBox);
  testimonials.appendChild(boxes);
};

testimonials();

// const plans = () => {
//   const plans = document.createElement("div");
//   plans.classList.add("plans");

//   const mainBoxFun = () => {
//     const mainBox = document.createElement("div");
//     mainBox.classList.add("mainBox");

//     const h1 = document.createElement("h1");
//     h1.innerHTML = "Choose your favorite plan";

//     const subscriptionFun = () => {
//       const subscription = document.createElement("div");
//       subscription.classList.add("subscription");

//       const subscriptionLevelFun = () => {
//         const subscriptionLevel = document.createElement("div");
//         subscriptionLevel.classList.add("subscription-level");

//         const h3 = document.createElement("h3");
//         h3.innerHTML = "Subscription level";

//         subscriptionLevel.appendChild(h3);
//         return subscriptionLevel;
//       };

//       const subscriptionLevel = subscriptionLevelFun();

//       const subscriptionOptionsFun = () => {
//         const subscriptionOptions = document.createElement("div");
//         subscriptionOptions.classList.add("subscription-options");

//         const basicFun = () => {
//           const basic = document.createElement("span");
//           basic.classList.add("basic");

//           const p = document.createElement("p");
//           p.innerHTML = "Basic";

//           const i = document.createElement("i");
//           i.classList.add("fas", "fa-lightbulb");

//           basic.appendChild(p);
//           basic.appendChild(i);
//           return basic;
//         };

//         const basic = basicFun();

//         const advancedFun = () => {
//           const advanced = document.createElement("span");
//           advanced.classList.add("advanced");

//           const p = document.createElement("p");
//           p.innerHTML = "Advanced";

//           const i = document.createElement("i");
//           i.classList.add("fas", "fa-bolt");

//           advanced.appendChild(p);
//           advanced.appendChild(i);
//           return advanced;
//         };

//         const advanced = advancedFun();

//         const premiumFun = () => {
//           const premium = document.createElement("span");
//           premium.classList.add("premium");

//           const p = document.createElement("p");
//           p.innerHTML = "Premium";

//           const i = document.createElement("i");
//           i.classList.add("fas", "fa-crown");

//           premium.appendChild(p);
//           premium.appendChild(i);
//           return premium;
//         };

//         const premium = premiumFun();

//         subscriptionOptions.appendChild(basic);
//         subscriptionOptions.appendChild(advanced);
//         subscriptionOptions.appendChild(premium);
//         return subscriptionOptions;
//       };

//       const subscriptionOptions = subscriptionOptionsFun();

//       subscription.appendChild(subscriptionLevel);
//       subscription.appendChild(subscriptionOptions);
//       return subscription;
//     };

//     const subscription = subscriptionFun();

//     const customDivider = (parent) => {
//       const customDivider = document.createElement("div");
//       customDivider.classList.add("custom-divider");

//       parent.appendChild(customDivider);
//     };

//     const boxFun = () => {
//       const box = document.createElement("div");
//       box.classList.add("box");

//       const h3 = document.createElement("div");
//       h3.innerHTML = "Number of Users";

//       const statusFun = () => {
//         const status = document.createElement("div");
//         status.classList.add("status");

//         const span1 = document.createElement("span");
//         span1.innerHTML = "1";

//         const span2 = document.createElement("span");
//         span2.innerHTML = "Up to 5";

//         const span3 = document.createElement("span");
//         span3.innerHTML = "Unlimited";

//         status.appendChild(span1);
//         status.appendChild(span2);
//         status.appendChild(span3);

//         return status;
//       };

//       const status = statusFun();

//       box.appendChild(h3);
//       box.appendChild(status);
//       return box;
//     };
//     customDivider(mainBox);
//     const box = boxFun();

//     const box2Fun = () => {
//       const box = document.createElement("div");
//       box.classList.add("box");

//       const h3 = document.createElement("div");
//       h3.innerHTML = "Customer Support";

//       const statusFun = () => {
//         const status = document.createElement("div");
//         status.classList.add("status");

//         const span1 = document.createElement("span");
//         span1.innerHTML = "Online";

//         const span2 = document.createElement("span");
//         span2.innerHTML = "Priority";

//         const span3 = document.createElement("span");
//         span3.innerHTML = "Preminum";

//         status.appendChild(span1);
//         status.appendChild(span2);
//         status.appendChild(span3);

//         return status;
//       };

//       const status = statusFun();
//       box.appendChild(h3);
//       box.appendChild(status);
//       return box;
//     };
//     customDivider(mainBox);
//     const box2 = box2Fun();

//     const box3Fun = () => {
//       const box = document.createElement("div");
//       box.classList.add("box");

//       const h3 = document.createElement("div");
//       h3.innerHTML = "Monthly Requests";

//       const statusFun = () => {
//         const status = document.createElement("div");
//         status.classList.add("status");

//         const span = document.createElement("span");

//         const span1 = document.createElement("span");
//         span1.innerHTML = "1000";

//         const span2 = document.createElement("span");
//         span2.innerHTML = "5000";

//         const span3 = document.createElement("span");
//         span3.innerHTML = "Unlimited";

//         status.appendChild(span1);
//         status.appendChild(span2);
//         status.appendChild(span3);
//         return status;
//       };

//       const status = statusFun();

//       box.appendChild(h3);
//       box.appendChild(status);
//       return box;
//     };
//     customDivider(mainBox);
//     const box3 = box3Fun();

//     const box4Fun = () => {
//       const box = document.createElement("div");
//       box.classList.add("box");

//       const h3 = document.createElement("div");
//       h3.innerHTML = "Data Packages";

//       const statusFun = () => {
//         const status = document.createElement("div");
//         status.classList.add("status");

//         const span = document.createElement("span");

//         const span1 = document.createElement("span");
//         span1.innerHTML = "1 GB";

//         const span2 = document.createElement("span");
//         span1.innerHTML = "5 GB";

//         const span3 = document.createElement("span");
//         span1.innerHTML = "10 GB";

//         status.appendChild(span1);
//         status.appendChild(span2);
//         status.appendChild(span3);
//         return status;
//       };

//       const status = statusFun();

//       box.appendChild(h3);
//       box.appendChild(status);
//       return box;
//     };
//     customDivider(mainBox);
//     const box4 = box4Fun();

//     const box5Fun = () => {
//       const box = document.createElement("div");
//       box.classList.add("box");

//       const h3 = document.createElement("div");
//       h3.innerHTML = "Flexible Cancellation";

//       const statusFun = () => {
//         const status = document.createElement("div");
//         status.classList.add("status");

//         const span = document.createElement("span");

//         const span1 = document.createElement("span");
//         span1.innerHTML = "Available";

//         const span2 = document.createElement("span");
//         span1.innerHTML = "Available";

//         const span3 = document.createElement("span");
//         span1.innerHTML = "Available";

//         status.appendChild(span1);
//         status.appendChild(span2);
//         status.appendChild(span3);
//         return status;
//       };

//       const status = statusFun();

//       box.appendChild(h3);
//       box.appendChild(status);
//       return box;
//     };
//     customDivider(mainBox);
//     const box5 = box5Fun();

//     const box6Fun = () => {
//       const box = document.createElement("div");
//       box.classList.add("box");

//       const h3 = document.createElement("div");
//       h3.innerHTML = "Monthly Cost";

//       const statusFun = () => {
//         const status = document.createElement("div");
//         status.classList.add("status");

//         const span = document.createElement("span");

//         const span1 = document.createElement("span");
//         span1.innerHTML = "$9.99";
//         const span2 = document.createElement("span");
//         span2.innerHTML = "$19.99";
//         const span3 = document.createElement("span");
//         span3.innerHTML = "$39.99";

//         status.appendChild(span1);
//         status.appendChild(span2);
//         status.appendChild(span3);
//         return status;
//       };

//       const status = statusFun();

//       box.appendChild(h3);
//       box.appendChild(status);
//       return box;
//     };
//     customDivider(mainBox);
//     const box6 = box6Fun();

//     mainBox.appendChild(h1);
//     mainBox.appendChild(subscription);

//     mainBox.appendChild(box);
//     mainBox.appendChild(box2);
//     mainBox.appendChild(box3);
//     mainBox.appendChild(box4);
//     mainBox.appendChild(box5);
//     mainBox.appendChild(box6);
//     return mainBox;
//   };

//   const mainBox = mainBoxFun();

//   document.body.appendChild(plans);
//   plans.appendChild(mainBox);
// };

// plans();

// const plans = () => {
//   const plans = document.createElement("div");
//   plans.classList.add("plans");

//   const mainBoxFun = () => {
//     const mainBox = document.createElement("div");
//     mainBox.classList.add("mainBox");

//     const h1 = document.createElement("h1");
//     h1.innerHTML = "Choose your favorite plan";

//     const subscriptionFun = () => {
//       const subscription = document.createElement("div");
//       subscription.classList.add("subscription");

//       const subscriptionLevelFun = () => {
//         const subscriptionLevel = document.createElement("div");
//         subscriptionLevel.classList.add("subscription-level");

//         const h3 = document.createElement("h3");
//         h3.innerHTML = "Subscription level";

//         subscriptionLevel.appendChild(h3);
//         return subscriptionLevel;
//       };

//       const subscriptionLevel = subscriptionLevelFun();

//       const subscriptionOptionsFun = () => {
//         const subscriptionOptions = document.createElement("div");
//         subscriptionOptions.classList.add("subscription-options");

//         const basicFun = () => {
//           const basic = document.createElement("span");
//           basic.classList.add("basic");

//           const p = document.createElement("p");
//           p.innerHTML = "Basic";

//           const i = document.createElement("i");
//           i.classList.add("fas", "fa-lightbulb");

//           basic.appendChild(p);
//           basic.appendChild(i);
//           return basic;
//         };

//         const basic = basicFun();

//         const advancedFun = () => {
//           const advanced = document.createElement("span");
//           advanced.classList.add("advanced");

//           const p = document.createElement("p");
//           p.innerHTML = "Advanced";

//           const i = document.createElement("i");
//           i.classList.add("fas", "fa-bolt");

//           advanced.appendChild(p);
//           advanced.appendChild(i);
//           return advanced;
//         };

//         const advanced = advancedFun();

//         const premiumFun = () => {
//           const premium = document.createElement("span");
//           premium.classList.add("premium");

//           const p = document.createElement("p");
//           p.innerHTML = "Premium";

//           const i = document.createElement("i");
//           i.classList.add("fas", "fa-crown");

//           premium.appendChild(p);
//           premium.appendChild(i);
//           return premium;
//         };

//         const premium = premiumFun();

//         subscriptionOptions.appendChild(basic);
//         subscriptionOptions.appendChild(advanced);
//         subscriptionOptions.appendChild(premium);
//         return subscriptionOptions;
//       };

//       const subscriptionOptions = subscriptionOptionsFun();

//       subscription.appendChild(subscriptionLevel);
//       subscription.appendChild(subscriptionOptions);
//       return subscription;
//     };

//     const subscription = subscriptionFun();

//     const addBoxWithDivider = (parent, title, statuses) => {
//       const box = document.createElement("div");
//       box.classList.add("box");

//       const h3 = document.createElement("div");
//       h3.innerHTML = title;

//       const statusFun = () => {
//         const status = document.createElement("div");
//         status.classList.add("status");

//         statuses.forEach((text) => {
//           const span = document.createElement("span");
//           span.innerHTML = text;
//           status.appendChild(span);
//         });

//         return status;
//       };

//       const status = statusFun();

//       box.appendChild(h3);
//       box.appendChild(status);
//       parent.appendChild(box);

//       // Add a custom divider after each box
//       const customDivider = document.createElement("div");
//       customDivider.classList.add("custom-divider");
//       parent.appendChild(customDivider);
//     };

//     mainBox.appendChild(h1);
//     mainBox.appendChild(subscription);

//     // Add each box with its corresponding divider
//     addBoxWithDivider(mainBox, "Number of Users", [
//       "1",
//       "Up to 5",
//       "Unlimited",
//     ]);
//     addBoxWithDivider(mainBox, "Customer Support", [
//       "Online",
//       "Priority",
//       "Premium",
//     ]);
//     addBoxWithDivider(mainBox, "Monthly Requests", [
//       "1000",
//       "5000",
//       "Unlimited",
//     ]);
//     addBoxWithDivider(mainBox, "Data Packages", ["1 GB", "5 GB", "10 GB"]);
//     addBoxWithDivider(mainBox, "Flexible Cancellation", [
//       "Available",
//       "Available",
//       "Available",
//     ]);
//     addBoxWithDivider(mainBox, "Monthly Cost", ["$9.99", "$19.99", "$39.99"]);

//     return mainBox;
//   };

//   const mainBox = mainBoxFun();

//   document.body.appendChild(plans);
//   plans.appendChild(mainBox);
// };

// plans();

const footer = () => {
  const footer = document.createElement("div");
  footer.classList.add("footer");

  const leftSectionFun = () => {
    const leftSection = document.createElement("div");
    leftSection.classList.add("left-section");

    const img = document.createElement("img");
    img.src = "img/Ninja Turtles icon.svg";

    const p = document.createElement("p");
    p.innerHTML = "AI ALLY";

    leftSection.appendChild(img);
    leftSection.appendChild(p);
    return leftSection;
  };

  const leftSection = leftSectionFun();

  const centerSectionFun = () => {
    const centerSection = document.createElement("div");
    centerSection.classList.add("center-section");

    const menuItems = [
      { text: "Home", href: "#" },
      { text: "Features", href: "#" },
      { text: "Pricing", href: "#" },
      { text: "Testimonials", href: "#" },
    ];

    const ul = document.createElement("ul");

    menuItems.forEach((item) => {
      const li = document.createElement("li");

      const a = document.createElement("a");
      a.textContent = item.text;
      a.href = item.href;

      li.appendChild(a);
      ul.appendChild(li);
    });

    centerSection.appendChild(ul);
    return centerSection;
  };

  const centerSection = centerSectionFun();

  const rightSectionFun = () => {
    const rightSection = document.createElement("div");
    rightSection.classList.add("right-section");

    const menuItem = [
      { text: "Instagram", href: "#" },
      { text: "Facebook", href: "#" },
      { text: "Twitter", href: "#" },
    ];

    const ul = document.createElement("ul");

    menuItem.forEach((item) => {
      const li = document.createElement("li");

      const a = document.createElement("a");
      a.textContent = item.text;
      a.href = item.href;

      li.appendChild(a);
      ul.appendChild(li);
    });

    rightSection.appendChild(ul);
    return rightSection;
  };

  const rightSection = rightSectionFun();

  document.body.appendChild(footer);
  footer.appendChild(leftSection);
  footer.appendChild(centerSection);
  footer.appendChild(rightSection);
};

footer();

const customDivider = () => {
  const customDivider = document.createElement("div");
  customDivider.classList.add("custom-divider2");

  document.body.appendChild(customDivider);
};

customDivider();

const down = () => {
  const down = document.createElement("div");
  down.classList.add("down");

  const leftSectionFun = () => {
    const leftSection = document.createElement("div");
    leftSection.classList.add("left-section");

    const p = document.createElement("p");
    p.innerHTML = "Copyright © 2024 Ai Ally";

    leftSection.appendChild(p);
    return leftSection;
  };

  const leftSection = leftSectionFun();

  const rightSectionFun = () => {
    const rightSection = document.createElement("div");
    rightSection.classList.add("right-section");

    const p = document.createElement("p");
    p.innerHTML = "Privacy Policy";

    rightSection.appendChild(p);
    return rightSection;
  };

  const rightSection = rightSectionFun();

  document.body.appendChild(down);
  down.appendChild(leftSection);
  down.appendChild(rightSection);
};

down();
