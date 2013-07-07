String.prototype.toURL = function() { return this.split(' ').join('-').toLowerCase();}

glasswing.randomDate = function(start, end) {
	if (! start) { start = new Date(2008,0,1); }
	if (! end) { end = new Date(); }

    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
}