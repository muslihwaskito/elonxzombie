var gdjs;(function(o){const p=new o.Logger("Pathfinding behavior");class f extends o.RuntimeBehavior{constructor(e,s,l){super(e,s,l);this._path=[];this._pathFound=!1;this._speed=0;this._angularSpeed=0;this._distanceOnSegment=0;this._totalSegmentDistance=0;this._currentSegment=0;this._reachedEnd=!1;this._movementAngle=0;this._path===void 0||(this._path.length=0),this._allowDiagonals=s.allowDiagonals,this._acceleration=s.acceleration,this._maxSpeed=s.maxSpeed,this._angularMaxSpeed=s.angularMaxSpeed,this._rotateObject=s.rotateObject,this._angleOffset=s.angleOffset,this._cellWidth=s.cellWidth,this._cellHeight=s.cellHeight,this._gridOffsetX=s.gridOffsetX||0,this._gridOffsetY=s.gridOffsetY||0,this._extraBorder=s.extraBorder,this._manager=o.PathfindingObstaclesManager.getManager(e),this._searchContext=new o.PathfindingRuntimeBehavior.SearchContext(this._manager)}updateFromBehaviorData(e,s){return e.allowDiagonals!==s.allowDiagonals&&this.allowDiagonals(s.allowDiagonals),e.acceleration!==s.acceleration&&this.setAcceleration(s.acceleration),e.maxSpeed!==s.maxSpeed&&this.setMaxSpeed(s.maxSpeed),e.angularMaxSpeed!==s.angularMaxSpeed&&this.setAngularMaxSpeed(s.angularMaxSpeed),e.rotateObject!==s.rotateObject&&this.setRotateObject(s.rotateObject),e.angleOffset!==s.angleOffset&&this.setAngleOffset(s.angleOffset),e.cellWidth!==s.cellWidth&&this.setCellWidth(s.cellWidth),e.cellHeight!==s.cellHeight&&this.setCellHeight(s.cellHeight),e.gridOffsetX!==s.gridOffsetX&&(this._gridOffsetX=s.gridOffsetX),e.gridOffsetY!==s.gridOffsetY&&(this._gridOffsetY=s.gridOffsetY),e.extraBorder!==s.extraBorder&&this.setExtraBorder(s.extraBorder),!0}setCellWidth(e){this._cellWidth=e}getCellWidth(){return this._cellWidth}setCellHeight(e){this._cellHeight=e}getCellHeight(){return this._cellHeight}setGridOffsetX(e){this._gridOffsetX=e}getGridOffsetX(){return this._gridOffsetX}setGridOffsetY(e){this._gridOffsetY=e}getGridOffsetY(){return this._gridOffsetY}setAcceleration(e){this._acceleration=e}getAcceleration(){return this._acceleration}setMaxSpeed(e){this._maxSpeed=e}getMaxSpeed(){return this._maxSpeed}setSpeed(e){this._speed=e}getSpeed(){return this._speed}getMovementAngle(){return this._movementAngle}movementAngleIsAround(e,s){return o.evtTools.common.angleDifference(this._movementAngle,e)<=s}setAngularMaxSpeed(e){this._angularMaxSpeed=e}getAngularMaxSpeed(){return this._angularMaxSpeed}setAngleOffset(e){this._angleOffset=e}getAngleOffset(){return this._angleOffset}setExtraBorder(e){this._extraBorder=e}getExtraBorder(){return this._extraBorder}allowDiagonals(e){this._allowDiagonals=e}diagonalsAllowed(){return this._allowDiagonals}setRotateObject(e){this._rotateObject=e}isObjectRotated(){return this._rotateObject}getNodeX(e){return e<this._path.length?this._path[e][0]:0}getNodeY(e){return e<this._path.length?this._path[e][1]:0}getNextNodeIndex(){return this._currentSegment+1<this._path.length?this._currentSegment+1:this._path.length-1}getNodeCount(){return this._path.length}getNextNodeX(){return this._path.length===0?0:this._currentSegment+1<this._path.length?this._path[this._currentSegment+1][0]:this._path[this._path.length-1][0]}getNextNodeY(){return this._path.length===0?0:this._currentSegment+1<this._path.length?this._path[this._currentSegment+1][1]:this._path[this._path.length-1][1]}getLastNodeX(){return this._path.length<2?0:this._currentSegment<this._path.length-1?this._path[this._currentSegment][0]:this._path[this._path.length-1][0]}getLastNodeY(){return this._path.length<2?0:this._currentSegment<this._path.length-1?this._path[this._currentSegment][1]:this._path[this._path.length-1][1]}getDestinationX(){return this._path.length===0?0:this._path[this._path.length-1][0]}getDestinationY(){return this._path.length===0?0:this._path[this._path.length-1][1]}pathFound(){return this._pathFound}destinationReached(){return this._reachedEnd}moveTo(e,s,l){const t=this.owner,i=Math.round((s-this._gridOffsetX)/this._cellWidth),h=Math.round((l-this._gridOffsetY)/this._cellHeight),r=Math.round((t.getX()-this._gridOffsetX)/this._cellWidth),a=Math.round((t.getY()-this._gridOffsetY)/this._cellHeight);if(r==i&&a==h){this._path.length=0,this._path.push([t.getX(),t.getY()]),this._path.push([s,l]),this._enterSegment(0),this._pathFound=!0;return}if(this._searchContext.allowDiagonals(this._allowDiagonals),this._searchContext.setObstacles(this._manager),this._searchContext.setCellSize(this._cellWidth,this._cellHeight),this._searchContext.setGridOffset(this._gridOffsetX,this._gridOffsetY),this._searchContext.setStartPosition(t.getX(),t.getY()),this._searchContext.setObjectSize(t.getX()-t.getDrawableX()+this._extraBorder,t.getY()-t.getDrawableY()+this._extraBorder,t.getWidth()-(t.getX()-t.getDrawableX())+this._extraBorder,t.getHeight()-(t.getY()-t.getDrawableY())+this._extraBorder),this._searchContext.computePathTo(s,l)){let n=this._searchContext.getFinalNode(),_=0;for(;n;)_===this._path.length&&this._path.push([0,0]),this._path[_][0]=n.pos[0]*this._cellWidth+this._gridOffsetX,this._path[_][1]=n.pos[1]*this._cellHeight+this._gridOffsetY,n=n.parent,_++;this._path.length=_,this._path.reverse(),this._path[0][0]=t.getX(),this._path[0][1]=t.getY(),this._enterSegment(0),this._pathFound=!0;return}this._pathFound=!1}_enterSegment(e){if(this._path.length!==0)if(this._currentSegment=e,this._currentSegment<this._path.length-1){const s=this._path[this._currentSegment+1][0]-this._path[this._currentSegment][0],l=this._path[this._currentSegment+1][1]-this._path[this._currentSegment][1];this._totalSegmentDistance=Math.sqrt(s*s+l*l),this._distanceOnSegment=0,this._reachedEnd=!1,this._movementAngle=(o.toDegrees(Math.atan2(l,s))+360)%360}else this._reachedEnd=!0,this._speed=0}doStepPreEvents(e){if(this._path.length===0||this._reachedEnd)return;const s=this.owner.getElapsedTime(e)/1e3,l=this._speed;this._speed!==this._maxSpeed&&(this._speed+=this._acceleration*s,this._speed>this._maxSpeed&&(this._speed=this._maxSpeed)),this._angularSpeed=this._angularMaxSpeed,this._distanceOnSegment+=(this._speed+l)/2*s;const t=this._totalSegmentDistance-this._distanceOnSegment;t<=0&&this._currentSegment<this._path.length&&(this._enterSegment(this._currentSegment+1),this._distanceOnSegment=-t);let i=[0,0];this._currentSegment<this._path.length-1?(i[0]=o.evtTools.common.lerp(this._path[this._currentSegment][0],this._path[this._currentSegment+1][0],this._distanceOnSegment/this._totalSegmentDistance),i[1]=o.evtTools.common.lerp(this._path[this._currentSegment][1],this._path[this._currentSegment+1][1],this._distanceOnSegment/this._totalSegmentDistance),this._rotateObject&&this.owner.getAngle()!==this._movementAngle+this._angleOffset&&this.owner.rotateTowardAngle(this._movementAngle+this._angleOffset,this._angularSpeed,e)):i=this._path[this._path.length-1],this.owner.setX(i[0]),this.owner.setY(i[1])}doStepPostEvents(e){}static euclideanDistance(e,s){return Math.sqrt((e[0]-s[0])*(e[0]-s[0])+(e[1]-s[1])*(e[1]-s[1]))}static manhattanDistance(e,s){return Math.abs(e[0]-s[0])+Math.abs(e[1]-s[1])}}o.PathfindingRuntimeBehavior=f,o.registerBehavior("PathfindingBehavior::PathfindingBehavior",o.PathfindingRuntimeBehavior),function(s){class c{constructor(t,i){this.cost=0;this.smallestCost=-1;this.estimateCost=-1;this.parent=null;this.open=!0;this.pos=[t,i]}reinitialize(t,i){this.pos[0]=t,this.pos[1]=i,this.cost=0,this.smallestCost=-1,this.estimateCost=-1,this.parent=null,this.open=!0}}s.Node=c;class e{constructor(t){this._finalNode=null;this._destination=[0,0];this._start=[0,0];this._startX=0;this._startY=0;this._allowDiagonals=!0;this._maxComplexityFactor=50;this._cellWidth=20;this._cellHeight=20;this._gridOffsetX=0;this._gridOffsetY=0;this._leftBorder=0;this._rightBorder=0;this._topBorder=0;this._bottomBorder=0;this._allNodes=[];this._openNodes=[];this._closeObstacles=[];this._nodeCache=[];this._obstacles=t,this._distanceFunction=s.euclideanDistance}setObstacles(t){return this._obstacles=t,this}getFinalNode(){return this._finalNode}allowDiagonals(t){return this._allowDiagonals=t,this._distanceFunction=t?s.euclideanDistance:s.manhattanDistance,this}setStartPosition(t,i){return this._startX=t,this._startY=i,this}setObjectSize(t,i,h,r){return this._leftBorder=t,this._rightBorder=h,this._topBorder=i,this._bottomBorder=r,this}setCellSize(t,i){return this._cellWidth=t,this._cellHeight=i,this}setGridOffset(t,i){return this._gridOffsetX=t,this._gridOffsetY=i,this}computePathTo(t,i){if(this._obstacles===null){p.log("You tried to compute a path without specifying the obstacles");return}this._destination[0]=Math.round((t-this._gridOffsetX)/this._cellWidth),this._destination[1]=Math.round((i-this._gridOffsetY)/this._cellHeight),this._start[0]=Math.round((this._startX-this._gridOffsetX)/this._cellWidth),this._start[1]=Math.round((this._startY-this._gridOffsetY)/this._cellHeight),this._freeAllNodes();const h=this._getNode(this._start[0],this._start[1]);h.smallestCost=0,h.estimateCost=0+this._distanceFunction(this._start,this._destination),this._openNodes.length=0,this._openNodes.push(h);let r=0;const a=h.estimateCost*this._maxComplexityFactor;for(;this._openNodes.length!==0;){if(r++>a)return!1;const n=this._openNodes.shift();if(n.open=!1,n.pos[0]==this._destination[0]&&n.pos[1]==this._destination[1])return this._finalNode=n,!0;this._insertNeighbors(n)}return!1}_freeAllNodes(){if(this._nodeCache.length<=32e3){for(const t in this._allNodes)if(this._allNodes.hasOwnProperty(t)){const i=this._allNodes[t];for(const h in i)i.hasOwnProperty(h)&&this._nodeCache.push(i[h])}}this._allNodes=[]}_insertNeighbors(t){this._addOrUpdateNode(t.pos[0]+1,t.pos[1],t,1),this._addOrUpdateNode(t.pos[0]-1,t.pos[1],t,1),this._addOrUpdateNode(t.pos[0],t.pos[1]+1,t,1),this._addOrUpdateNode(t.pos[0],t.pos[1]-1,t,1),this._allowDiagonals&&(this._addOrUpdateNode(t.pos[0]+1,t.pos[1]+1,t,1.414213562),this._addOrUpdateNode(t.pos[0]+1,t.pos[1]-1,t,1.414213562),this._addOrUpdateNode(t.pos[0]-1,t.pos[1]-1,t,1.414213562),this._addOrUpdateNode(t.pos[0]-1,t.pos[1]+1,t,1.414213562))}_getNode(t,i){if(this._allNodes.hasOwnProperty(t)){if(this._allNodes[t].hasOwnProperty(i))return this._allNodes[t][i]}else this._allNodes[t]=[];let h;this._nodeCache.length!==0?(h=this._nodeCache.shift(),h.reinitialize(t,i)):h=new c(t,i);const r=t*this._cellWidth+this._gridOffsetX,a=i*this._cellHeight+this._gridOffsetY;let n=!1;const _=this._cellHeight>this._cellWidth?this._cellHeight*2:this._cellWidth*2;this._obstacles.getAllObstaclesAround(r,a,_,this._closeObstacles);for(let d=0;d<this._closeObstacles.length;++d){const g=this._closeObstacles[d].owner,u=Math.floor((g.getDrawableX()-this._rightBorder-this._gridOffsetX)/this._cellWidth),m=Math.floor((g.getDrawableY()-this._bottomBorder-this._gridOffsetY)/this._cellHeight),O=Math.ceil((g.getDrawableX()+g.getWidth()+this._leftBorder-this._gridOffsetX)/this._cellWidth),S=Math.ceil((g.getDrawableY()+g.getHeight()+this._topBorder-this._gridOffsetY)/this._cellHeight);if(u<t&&t<O&&m<i&&i<S)if(n=!0,this._closeObstacles[d].isImpassable()){h.cost=-1;break}else h.cost+=this._closeObstacles[d].getCost()}return n||(h.cost=1),this._allNodes[t][i]=h,h}_addOrUpdateNode(t,i,h,r){const a=this._getNode(t,i);if(!(!a.open||a.cost<0)&&(a.smallestCost===-1||a.smallestCost>h.smallestCost+(h.cost+a.cost)/2*r)){if(a.smallestCost!=-1){for(let n=0;n<this._openNodes.length;++n)if(this._openNodes[n].pos[0]==a.pos[0]&&this._openNodes[n].pos[1]==a.pos[1]){this._openNodes.splice(n,1);break}}if(a.smallestCost=h.smallestCost+(h.cost+a.cost)/2*r,a.parent=h,a.estimateCost=a.smallestCost+this._distanceFunction(a.pos,this._destination),this._openNodes.length===0||this._openNodes[this._openNodes.length-1].estimateCost<a.estimateCost)this._openNodes.push(a);else for(let n=0;n<this._openNodes.length;++n)if(this._openNodes[n].estimateCost>=a.estimateCost){this._openNodes.splice(n,0,a);break}}}}s.SearchContext=e}(f=o.PathfindingRuntimeBehavior||(o.PathfindingRuntimeBehavior={}))})(gdjs||(gdjs={}));
//# sourceMappingURL=pathfindingruntimebehavior.js.map
