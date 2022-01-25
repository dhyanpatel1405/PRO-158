AFRAME.registerComponent("virtualposters", {
    init: function () {
      this.posterContainer = this.el;
      this.createCards()
      //this.createtittle()
    },
  
    createCards: function () {
      const thumbNailsRef = [
        {
          id: "spiderman",
          title: "Spider Man(No Way Home)",
          url: "./assets/thumbnail/spiderman.jpeg",
        },
        {
          id: "flash",
          title: "Flash",
          url: "./assets/thumbnail/flash.jpeg",
        },
  
        {
          id: "ironman",
          title: "Iron Man",
          url: "./assets/thumbnail/ironman.jpeg",
        },
        {
          id: "doctorstrange",
          title: "Doctor Strange",
          url: "./assets/thumbnail/doctorstrange.jpeg",
        },
      ];
      let prevoiusXPosition = -60;
  
      for (var item of thumbNailsRef) {
        const posX = prevoiusXPosition + 25;
        const posY = 10;
        const posZ = -40;
        const position = { x: posX, y: posY, z: posZ };
        prevoiusXPosition = posX;
  
        // Border Element
        const borderEl = this.createBorder(position, item.id)
        // Thumbnail Element
        const thumbnail = this.createthumbnail(item)
        borderEl.appendChild(thumbnail)
        // Title Text Element
        const titleEl = this.createtittle(position , item)
        borderEl.appendChild(titleEl)
        this.posterContainer.appendChild(borderEl);
      }
    },
    createBorder: function (position,id) {
      const entityEl = document.createElement('a-entity')
      entityEl.setAttribute("visible",true)
      entityEl.setAttribute("id",id)
      entityEl.setAttribute("position",position)
      entityEl.setAttribute("geometry",{
        primitive:"ring" , radiusInner:9 ,radiusOuter:10
      })
      entityEl.setAttribute("material",{
       color:"red" , opacity:1
      })
      return entityEl
    },
    // this is for thunbnail
    createthumbnail: function (item) {
      const entityEl = document.createElement('a-entity')
      entityEl.setAttribute("visible",true)
      entityEl.setAttribute("geometry",{
        primitive:"circle" , radius:9
      })
      entityEl.setAttribute("material",{
       src:item.url
      })
      return entityEl
    },
  
    createtittle: function (position , item) {
      const entityEl = document.createElement('a-entity')
      entityEl.setAttribute("visible",true)
      entityEl.setAttribute("text",{
      font:"exo2bold" , width:70 , color:"black" , align:"center" , value:item.title
      })
      const elposition = position
      elposition.y = -20  
      entityEl.setAttribute("position", elposition)
      return entityEl
    },
  });