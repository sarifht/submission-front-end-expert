"use strict";(self.webpackChunksarif_resto=self.webpackChunksarif_resto||[]).push([[869],{249:(n,A,e)=>{e.d(A,{A:()=>t});var r=e(354),i=e.n(r),o=e(314),a=e.n(o)()(i());a.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Nunito&display=swap);"]),a.push([n.id,'body {\n  margin: 0;\n  font-family: "Nunito", sans-serif;\n}\n\n.app-bar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #c2410c;\n  color: white;\n  padding: 1rem;\n}\n\nbutton,\na,\ninput[type="text"],\ntextarea {\n  min-width: 44px;\n  min-height: 44px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.app-bar__brand h1 {\n  margin: 0;\n}\n\n.app-bar__menu {\n  display: none;\n  font-size: 1.5rem;\n  background: none;\n  border: none;\n  color: white;\n}\n\n.app-bar__menu,\n.app-bar__navigation a {\n  min-width: 44px;\n  min-height: 44px;\n}\n\n.app-bar__menu::before {\n  content: "☰";\n}\n\n.app-bar__menu.open::before {\n  content: "✖";\n}\n\n.app-bar__navigation {\n  list-style: none;\n  display: flex;\n  gap: 1rem;\n  margin: 0;\n  padding: 0;\n}\n\n.app-bar__navigation a {\n  color: white;\n  text-decoration: none;\n}\n\n.skip-to-content a {\n  position: absolute;\n  top: -40px;\n  left: 0;\n  background: #000;\n  color: #fff;\n  padding: 8px;\n  z-index: 100;\n  transition: top 0.3s;\n}\n\n.skip-to-content a:focus {\n  top: 0;\n}\n\n.hero img {\n  width: 100%;\n  height: auto;\n  min-width: 1000px;\n}\n\n.restaurant-list {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 1rem;\n  padding: 1rem;\n  margin-inline: 2rem;\n}\n\n.restaurant-item {\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n\n.restaurant-item:focus {\n  outline: 2px solid #333;\n  outline-offset: 2px;\n}\n\n.restaurant-item.focused {\n  outline: 2px solid #333;\n  outline-offset: 2px;\n}\n\n.restaurant-item img {\n  width: 100%;\n  height: 200px;\n  max-height: 200px;\n  object-fit: cover;\n}\n\n.restaurant-item h2,\n.restaurant-item p {\n  margin: 0.5rem;\n}\n\n.view-details-btn {\n  margin-block: 0.5rem;\n  background-color: #e64a19;\n  text-decoration: none;\n  color: white;\n  font-size: 0.8rem;\n  /* padding: 0.2rem; */\n  padding-inline: 5px;\n  margin-inline: 10px;\n  border-radius: 10px;\n}\n\n.view-details-btn:hover {\n  background-color: #b1340e;\n}\n\n.title {\n  text-align: center;\n}\n\n.star-rating {\n  display: flex;\n  gap: 0.2rem;\n}\n\n.star {\n  font-size: 1.2rem;\n  color: gold;\n}\n\n.restaurant-item .rating {\n  margin-left: 7px;\n}\n\n/*CCs untuk halaman detail restoran*/\n.restaurant-detail {\n  padding: 2rem;\n  margin: 2rem auto;\n  max-width: 800px;\n  background-color: #fff;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n\n.restaurant-detail h2 {\n  font-size: 2rem;\n  margin-bottom: 1rem;\n}\n\n.restaurant-detail img {\n  width: 100%;\n  height: auto;\n  border-radius: 8px;\n  margin-bottom: 1rem;\n}\n\n.restaurant-detail p {\n  font-size: 1rem;\n  line-height: 1.5;\n  margin-bottom: 1rem;\n}\n\n.restaurant-detail h3 {\n  font-size: 1.5rem;\n  margin-top: 2rem;\n  margin-bottom: 1rem;\n}\n\n.restaurant-detail ul {\n  list-style: none;\n  padding: 0;\n}\n\n.restaurant-detail ul li {\n  background-color: #f9f9f9;\n  padding: 0.5rem;\n  border-radius: 4px;\n  margin-bottom: 0.5rem;\n}\n\n.food-menu {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n}\n\n.food-card {\n  background-color: #f9f9f9;\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  padding: 1rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  flex: 1 1 calc(33.333% - 1rem);\n  box-sizing: border-box;\n  text-align: center;\n}\n\n.food-card p {\n  margin: 0;\n  font-size: 1rem;\n}\n\n.drink-menu {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n}\n\n.drink-card {\n  background-color: #f9f9f9;\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  padding: 1rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  flex: 1 1 calc(33.333% - 1rem);\n  box-sizing: border-box;\n  text-align: center;\n}\n\n.drink-card p {\n  margin: 0;\n  font-size: 1rem;\n}\n\n.carousel {\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n  max-width: 800px;\n  margin: 2rem auto;\n}\n\n.carousel-inner {\n  display: flex;\n  transition: transform 0.5s ease-in-out;\n}\n\n.carousel-item {\n  min-width: 100%;\n  box-sizing: border-box;\n  padding: 1rem;\n  background-color: #f9f9f9;\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  text-align: center;\n}\n\n.carousel-item p {\n  margin: 0.5rem 0;\n}\n\n#favoriteButtonContainer {\n  display: flex;\n  justify-content: center;\n  margin-top: 2rem;\n}\n\n#favoriteButton,\n#favoritedButton {\n  padding: 0.5rem 1rem;\n  font-size: 1rem;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  background-color: #ff6347;\n  color: #fff;\n  margin-bottom: 1rem;\n}\n\n#favoritedButton {\n  background-color: #32cd32;\n}\n\n.testimoni-restoran {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 1rem;\n  padding: 1rem;\n  margin-inline: 2rem;\n}\n\n.testimonial-card {\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  padding: 1rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n\n.testimonial-card:focus {\n  outline: 2px solid #333;\n  outline-offset: 2px;\n}\n\n.testimonial-card img {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  margin-bottom: 1rem;\n}\n\n.testimonial-card h3,\n.testimonial-card p {\n  margin: 0.5rem 0;\n}\n\n.testimonial-card .rating {\n  display: flex;\n  justify-content: center;\n  gap: 0.2rem;\n  margin-top: 0.5rem;\n}\n\nfooter {\n  text-align: center;\n  padding: 1rem;\n  background-color: #333;\n  color: white;\n}\n\nfooter a {\n  min-width: 44px;\n  min-height: 44px;\n  color: white;\n  text-decoration: none;\n  font-weight: bold;\n}\n\n.add-to-home-screen {\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  background-color: #ff5722;\n  color: white;\n  border: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n  cursor: pointer;\n  z-index: 1000;\n}\n\n.add-to-home-screen:hover {\n  background-color: #e64a19;\n}\n\n.review-form {\n  margin: 2rem 0;\n  padding: 1rem;\n  background-color: #f5f5f5;\n  border-radius: 8px;\n}\n\n.review-form form {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.review-form input,\n.review-form textarea {\n  padding: 0.5rem;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n}\n\n.review-form button {\n  padding: 0.5rem 1rem;\n  background-color: #2c3e50;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\n.review-form button:hover {\n  background-color: #34495e;\n}\n\n.loader-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 200px;\n}\n\n.loader {\n  width: 48px;\n  height: 48px;\n  border: 5px solid #fff;\n  border-bottom-color: #ff3d00;\n  border-radius: 50%;\n  animation: rotation 1s linear infinite;\n}\n\n@keyframes rotation {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.error-message {\n  background-color: #ffebee;\n  color: #c62828;\n  padding: 1rem;\n  border-radius: 4px;\n  margin: 1rem 0;\n  text-align: center;\n}\n\n.success-message {\n  background-color: #e8f5e9;\n  color: #2e7d32;\n  padding: 1rem;\n  border-radius: 4px;\n  margin: 1rem 0;\n  text-align: center;\n}\n\n.loading-indicator {\n  text-align: center;\n  padding: 2rem;\n  font-size: 1.2rem;\n  color: #666;\n}\n\n.loading-spinner {\n  display: inline-block;\n  width: 40px;\n  height: 40px;\n  /* border: 4px solid #f3f3f3;\n  border-top: 4px solid #3498db; */\n  border: 5px solid #fff;\n  border-bottom-color: #ff3d00;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.error-message {\n  text-align: center;\n  padding: 2rem;\n  color: #e74c3c;\n  background-color: #fde8e7;\n  border-radius: 4px;\n  margin: 1rem;\n}\n\n@media (max-width: 1200px) {\n  .hero img {\n    min-width: 100%;\n  }\n}\n\n@media (max-width: 768px) {\n  .app-bar__menu {\n    display: block;\n  }\n\n  .app-bar__navigation {\n    display: none;\n    flex-direction: column;\n    gap: 0;\n  }\n\n  .app-bar__navigation.open {\n    display: flex;\n  }\n}\n\n@media (max-width: 320px) {\n  .restaurant-list,\n  .testimoni-restoran {\n    margin-inline: 0.5rem;\n    padding: 0.5rem;\n    grid-template-columns: 1fr;\n  }\n}\n\n/* Style skip to content detail */\n.hide {\n  display: none;\n}\n',"",{version:3,sources:["webpack://./src/styles/main.css"],names:[],mappings:"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",sourcesContent:['@import url("https://fonts.googleapis.com/css2?family=Nunito&display=swap");\nbody {\n  margin: 0;\n  font-family: "Nunito", sans-serif;\n}\n\n.app-bar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #c2410c;\n  color: white;\n  padding: 1rem;\n}\n\nbutton,\na,\ninput[type="text"],\ntextarea {\n  min-width: 44px;\n  min-height: 44px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.app-bar__brand h1 {\n  margin: 0;\n}\n\n.app-bar__menu {\n  display: none;\n  font-size: 1.5rem;\n  background: none;\n  border: none;\n  color: white;\n}\n\n.app-bar__menu,\n.app-bar__navigation a {\n  min-width: 44px;\n  min-height: 44px;\n}\n\n.app-bar__menu::before {\n  content: "☰";\n}\n\n.app-bar__menu.open::before {\n  content: "✖";\n}\n\n.app-bar__navigation {\n  list-style: none;\n  display: flex;\n  gap: 1rem;\n  margin: 0;\n  padding: 0;\n}\n\n.app-bar__navigation a {\n  color: white;\n  text-decoration: none;\n}\n\n.skip-to-content a {\n  position: absolute;\n  top: -40px;\n  left: 0;\n  background: #000;\n  color: #fff;\n  padding: 8px;\n  z-index: 100;\n  transition: top 0.3s;\n}\n\n.skip-to-content a:focus {\n  top: 0;\n}\n\n.hero img {\n  width: 100%;\n  height: auto;\n  min-width: 1000px;\n}\n\n.restaurant-list {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 1rem;\n  padding: 1rem;\n  margin-inline: 2rem;\n}\n\n.restaurant-item {\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n\n.restaurant-item:focus {\n  outline: 2px solid #333;\n  outline-offset: 2px;\n}\n\n.restaurant-item.focused {\n  outline: 2px solid #333;\n  outline-offset: 2px;\n}\n\n.restaurant-item img {\n  width: 100%;\n  height: 200px;\n  max-height: 200px;\n  object-fit: cover;\n}\n\n.restaurant-item h2,\n.restaurant-item p {\n  margin: 0.5rem;\n}\n\n.view-details-btn {\n  margin-block: 0.5rem;\n  background-color: #e64a19;\n  text-decoration: none;\n  color: white;\n  font-size: 0.8rem;\n  /* padding: 0.2rem; */\n  padding-inline: 5px;\n  margin-inline: 10px;\n  border-radius: 10px;\n}\n\n.view-details-btn:hover {\n  background-color: #b1340e;\n}\n\n.title {\n  text-align: center;\n}\n\n.star-rating {\n  display: flex;\n  gap: 0.2rem;\n}\n\n.star {\n  font-size: 1.2rem;\n  color: gold;\n}\n\n.restaurant-item .rating {\n  margin-left: 7px;\n}\n\n/*CCs untuk halaman detail restoran*/\n.restaurant-detail {\n  padding: 2rem;\n  margin: 2rem auto;\n  max-width: 800px;\n  background-color: #fff;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n\n.restaurant-detail h2 {\n  font-size: 2rem;\n  margin-bottom: 1rem;\n}\n\n.restaurant-detail img {\n  width: 100%;\n  height: auto;\n  border-radius: 8px;\n  margin-bottom: 1rem;\n}\n\n.restaurant-detail p {\n  font-size: 1rem;\n  line-height: 1.5;\n  margin-bottom: 1rem;\n}\n\n.restaurant-detail h3 {\n  font-size: 1.5rem;\n  margin-top: 2rem;\n  margin-bottom: 1rem;\n}\n\n.restaurant-detail ul {\n  list-style: none;\n  padding: 0;\n}\n\n.restaurant-detail ul li {\n  background-color: #f9f9f9;\n  padding: 0.5rem;\n  border-radius: 4px;\n  margin-bottom: 0.5rem;\n}\n\n.food-menu {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n}\n\n.food-card {\n  background-color: #f9f9f9;\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  padding: 1rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  flex: 1 1 calc(33.333% - 1rem);\n  box-sizing: border-box;\n  text-align: center;\n}\n\n.food-card p {\n  margin: 0;\n  font-size: 1rem;\n}\n\n.drink-menu {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n}\n\n.drink-card {\n  background-color: #f9f9f9;\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  padding: 1rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  flex: 1 1 calc(33.333% - 1rem);\n  box-sizing: border-box;\n  text-align: center;\n}\n\n.drink-card p {\n  margin: 0;\n  font-size: 1rem;\n}\n\n.carousel {\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n  max-width: 800px;\n  margin: 2rem auto;\n}\n\n.carousel-inner {\n  display: flex;\n  transition: transform 0.5s ease-in-out;\n}\n\n.carousel-item {\n  min-width: 100%;\n  box-sizing: border-box;\n  padding: 1rem;\n  background-color: #f9f9f9;\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  text-align: center;\n}\n\n.carousel-item p {\n  margin: 0.5rem 0;\n}\n\n#favoriteButtonContainer {\n  display: flex;\n  justify-content: center;\n  margin-top: 2rem;\n}\n\n#favoriteButton,\n#favoritedButton {\n  padding: 0.5rem 1rem;\n  font-size: 1rem;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  background-color: #ff6347;\n  color: #fff;\n  margin-bottom: 1rem;\n}\n\n#favoritedButton {\n  background-color: #32cd32;\n}\n\n.testimoni-restoran {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 1rem;\n  padding: 1rem;\n  margin-inline: 2rem;\n}\n\n.testimonial-card {\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  padding: 1rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n\n.testimonial-card:focus {\n  outline: 2px solid #333;\n  outline-offset: 2px;\n}\n\n.testimonial-card img {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  margin-bottom: 1rem;\n}\n\n.testimonial-card h3,\n.testimonial-card p {\n  margin: 0.5rem 0;\n}\n\n.testimonial-card .rating {\n  display: flex;\n  justify-content: center;\n  gap: 0.2rem;\n  margin-top: 0.5rem;\n}\n\nfooter {\n  text-align: center;\n  padding: 1rem;\n  background-color: #333;\n  color: white;\n}\n\nfooter a {\n  min-width: 44px;\n  min-height: 44px;\n  color: white;\n  text-decoration: none;\n  font-weight: bold;\n}\n\n.add-to-home-screen {\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  background-color: #ff5722;\n  color: white;\n  border: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n  cursor: pointer;\n  z-index: 1000;\n}\n\n.add-to-home-screen:hover {\n  background-color: #e64a19;\n}\n\n.review-form {\n  margin: 2rem 0;\n  padding: 1rem;\n  background-color: #f5f5f5;\n  border-radius: 8px;\n}\n\n.review-form form {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.review-form input,\n.review-form textarea {\n  padding: 0.5rem;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n}\n\n.review-form button {\n  padding: 0.5rem 1rem;\n  background-color: #2c3e50;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\n.review-form button:hover {\n  background-color: #34495e;\n}\n\n.loader-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 200px;\n}\n\n.loader {\n  width: 48px;\n  height: 48px;\n  border: 5px solid #fff;\n  border-bottom-color: #ff3d00;\n  border-radius: 50%;\n  animation: rotation 1s linear infinite;\n}\n\n@keyframes rotation {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.error-message {\n  background-color: #ffebee;\n  color: #c62828;\n  padding: 1rem;\n  border-radius: 4px;\n  margin: 1rem 0;\n  text-align: center;\n}\n\n.success-message {\n  background-color: #e8f5e9;\n  color: #2e7d32;\n  padding: 1rem;\n  border-radius: 4px;\n  margin: 1rem 0;\n  text-align: center;\n}\n\n.loading-indicator {\n  text-align: center;\n  padding: 2rem;\n  font-size: 1.2rem;\n  color: #666;\n}\n\n.loading-spinner {\n  display: inline-block;\n  width: 40px;\n  height: 40px;\n  /* border: 4px solid #f3f3f3;\n  border-top: 4px solid #3498db; */\n  border: 5px solid #fff;\n  border-bottom-color: #ff3d00;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.error-message {\n  text-align: center;\n  padding: 2rem;\n  color: #e74c3c;\n  background-color: #fde8e7;\n  border-radius: 4px;\n  margin: 1rem;\n}\n\n@media (max-width: 1200px) {\n  .hero img {\n    min-width: 100%;\n  }\n}\n\n@media (max-width: 768px) {\n  .app-bar__menu {\n    display: block;\n  }\n\n  .app-bar__navigation {\n    display: none;\n    flex-direction: column;\n    gap: 0;\n  }\n\n  .app-bar__navigation.open {\n    display: flex;\n  }\n}\n\n@media (max-width: 320px) {\n  .restaurant-list,\n  .testimoni-restoran {\n    margin-inline: 0.5rem;\n    padding: 0.5rem;\n    grid-template-columns: 1fr;\n  }\n}\n\n/* Style skip to content detail */\n.hide {\n  display: none;\n}\n'],sourceRoot:""}]);const t=a},810:(n,A,e)=>{var r=e(72),i=e.n(r),o=e(825),a=e.n(o),t=e(659),d=e.n(t),B=e(56),E=e.n(B),s=e(540),m=e.n(s),p=e(113),l=e.n(p),C=e(249),g={};g.styleTagTransform=l(),g.setAttributes=E(),g.insert=d().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=m();i()(C.A,g),C.A&&C.A.locals&&C.A.locals}}]);
//# sourceMappingURL=styles.bundle.js.map