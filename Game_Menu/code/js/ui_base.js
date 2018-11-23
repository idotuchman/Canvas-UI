var UIObject = {
    intersects: function(obj, mouse) {
 
    },
    updateStats: function(canvas){
        if (this.intersects(this, canvas.mouse)) {
            this.hovered = true;
            if (canvas.mouse.clicked) {
                this.clicked = true;
            }
        } else {
            this.hovered = false;
        }
        
        if (!canvas.mouse.down) {
            this.clicked = false;
        }           	
    }
};