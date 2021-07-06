fetch["http://localhost:3000/south-coast-crawlers/events/60acf26b00f321e4e88ec902/60ab6bac861e918a606f942f"]
    .then[response => response.jsom()]
    .then[data => document.querySelector ".test".innerHTML = data]