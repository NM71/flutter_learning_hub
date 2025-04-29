const tutorials = [
    { 
      title: "Responsive layout", 
      url: "https://lnkd.in/grqM7zU2",
      category: ["intermediate", "architecture"],
      tags: ["UI", "Responsive"]
    },
    { 
      title: "DevOps in Flutter", 
      url: "https://lnkd.in/dWaXcnSs",
      category: ["advanced", "deployment"],
      tags: ["DevOps", "CI/CD"]
    },
    { 
      title: "Error handling", 
      url: "https://lnkd.in/grPmi_dv",
      category: ["intermediate"],
      tags: ["Error Handling"]
    },
    { 
      title: "Flutter State Management", 
      url: "https://lnkd.in/d9chjG_W",
      category: ["intermediate", "state"],
      tags: ["State Management"]
    },
    { 
      title: "Flutter for Beginners (37 Hours)", 
      url: "https://lnkd.in/d3jQDZuU",
      category: ["beginner"],
      tags: ["Comprehensive", "Basics"]
    },
    { 
      title: "MVC in Flutter", 
      url: "https://lnkd.in/df_x5c75",
      category: ["intermediate", "architecture"],
      tags: ["MVC", "Architecture"]
    },
    { 
      title: "Retrofit", 
      url: "https://lnkd.in/gqPrb-8h",
      category: ["intermediate"],
      tags: ["API", "Networking"]
    },
    { 
      title: "Push Notification", 
      url: "https://lnkd.in/dmyi5xzk",
      category: ["intermediate"],
      tags: ["Notifications"]
    },
    { 
      title: "Github Actions", 
      url: "https://lnkd.in/dyD6_aYZ",
      category: ["advanced", "deployment"],
      tags: ["CI/CD", "GitHub"]
    },
    { 
      title: "Flutter Animations", 
      url: "https://lnkd.in/dYwzeiVG",
      category: ["intermediate"],
      tags: ["Animations", "UI"]
    },
    { 
      title: "Testing in Flutter", 
      url: "https://lnkd.in/d6CRX4cj",
      category: ["intermediate"],
      tags: ["Testing", "Quality"]
    },
    { 
      title: "Bloc in Flutter", 
      url: "https://lnkd.in/dtnUE69T",
      category: ["intermediate", "state"],
      tags: ["BLoC", "State Management"]
    },
    { 
      title: "CI/CD in Flutter", 
      url: "https://lnkd.in/dBBaPuyC",
      category: ["advanced", "deployment"],
      tags: ["CI/CD", "DevOps"]
    },
    { 
      title: "Firebase using Flutter", 
      url: "https://lnkd.in/dkBkJ-wY",
      category: ["intermediate"],
      tags: ["Firebase", "Backend"]
    },
    { 
      title: "Theme in Flutter", 
      url: "https://lnkd.in/dTJMiqU9",
      category: ["beginner", "intermediate"],
      tags: ["Theming", "UI"]
    },
    { 
      title: "Custom Painting", 
      url: "https://lnkd.in/dS6fg_QR",
      category: ["advanced"],
      tags: ["UI", "Graphics"]
    },
    { 
      title: "UI Design in Flutter", 
      url: "https://lnkd.in/dG8qU3wg",
      category: ["beginner", "intermediate"],
      tags: ["UI", "Design"]
    },
    { 
      title: "Best practices in Flutter", 
      url: "https://lnkd.in/d6rWd_Zt",
      category: ["intermediate", "advanced"],
      tags: ["Best Practices"]
    },
    { 
      title: "Basic crash course", 
      url: "https://lnkd.in/d4yvNehr",
      category: ["beginner"],
      tags: ["Basics", "Crash Course"]
    },
    { 
      title: "Clean Architecture", 
      url: "https://lnkd.in/ds5YtUc3",
      category: ["advanced", "architecture"],
      tags: ["Architecture", "Clean Code"]
    },
    { 
      title: "3D in Flutter", 
      url: "https://lnkd.in/g9VpVysb",
      category: ["advanced"],
      tags: ["3D", "Graphics"]
    },
    { 
      title: "TDD Clean Architecture", 
      url: "https://lnkd.in/dtuPvigV",
      category: ["advanced", "architecture"],
      tags: ["TDD", "Architecture"]
    },
    { 
      title: "Firebase Domain Driven", 
      url: "https://lnkd.in/dfVGxCJS",
      category: ["advanced", "architecture"],
      tags: ["Firebase", "DDD"]
    },
    { 
      title: "Mixins", 
      url: "https://lnkd.in/dZzU4ugW",
      category: ["intermediate"],
      tags: ["Mixins", "Dart"]
    },
    { 
      title: "Proper Error Handling", 
      url: "https://lnkd.in/dy-z7Dtz",
      category: ["intermediate"],
      tags: ["Error Handling", "Best Practices"]
    },
    { 
      title: "Firebase Course (14 hrs)", 
      url: "https://lnkd.in/deVuJNz2",
      category: ["intermediate"],
      tags: ["Firebase", "Comprehensive"]
    },
    { 
      title: "Riverpod", 
      url: "https://lnkd.in/ga_xdtmH",
      category: ["intermediate", "state"],
      tags: ["Riverpod", "State Management"]
    },
    { 
      title: "Riverpod Codegen", 
      url: "https://lnkd.in/gt7cvCpS",
      category: ["advanced", "state"],
      tags: ["Riverpod", "Code Generation"]
    },
    { 
      title: "Flutter with Gemini AI", 
      url: "https://lnkd.in/g-pZHmW4",
      category: ["advanced"],
      tags: ["AI", "Gemini"]
    },
    { 
      title: "Flutter Environments (Flavors)", 
      url: "https://lnkd.in/gqcAU3Kh",
      category: ["advanced", "deployment"],
      tags: ["Flavors", "Environments"]
    },
    { 
      title: "Shorebird (Hot Updates)", 
      url: "https://lnkd.in/gwyd44SP",
      category: ["advanced", "deployment"],
      tags: ["Shorebird", "Updates"]
    },
    { 
      title: "Release on Playstore", 
      url: "https://lnkd.in/g6Fm3fq7",
      category: ["intermediate", "deployment"],
      tags: ["Playstore", "Release"]
    },
    { 
      title: "Release on App Store", 
      url: "https://lnkd.in/gdmgitJV",
      category: ["intermediate", "deployment"],
      tags: ["App Store", "Release"]
    },
    { 
      title: "OneSignal (Notifications)", 
      url: "https://lnkd.in/gn43MPu5",
      category: ["intermediate"],
      tags: ["OneSignal", "Notifications"]
    },
    { 
      title: "Agentic Apps (Part 1)", 
      url: "https://lnkd.in/d8ydnb2B",
      category: ["advanced"],
      tags: ["Agentic", "AI"]
    },
    { 
      title: "Agentic Apps (Part 2)", 
      url: "https://lnkd.in/dhCeqgdE",
      category: ["advanced"],
      tags: ["Agentic", "AI"]
    },
    { 
      title: "Agora Video Call", 
      url: "https://lnkd.in/g-JhKCGX",
      category: ["advanced"],
      tags: ["Agora", "Video Call"]
    }
  ];
  