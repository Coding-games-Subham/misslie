function hasCollided(object1,object2){
    object1RightEdge=bullet.x+bullet.width;
    object2LeftEdge=object2.x;
    if(object1RightEdge>=object2LeftEdge){
        return true
    }
    return false;
}