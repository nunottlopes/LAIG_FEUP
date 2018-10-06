/**
 * MyQuad
 * @constructor
 */
class MyQuad extends CGFobject
{
	constructor(scene, minX, minY, maxX, maxY)
	{
		super(scene);

		this.minX = minX;
		this.maxX = maxX;
		this.minY = minY;
		this.maxY = maxY;

		this.initBuffers();
	};

	initBuffers()
	{
		this.vertices = [
			this.minX, this.minY, 0,
			this.maxX, this.minY, 0,
			this.minX, this.maxY, 0,
			this.maxX, this.maxY, 0
		];

		this.indices = [
		0, 1, 2,
		3, 2, 1
		];

		this.primitiveType = this.scene.gl.TRIANGLES;

		this.normals = [
			0, 0, 1,
			0, 0, 1,
			0, 0, 1,
			0, 0, 1
		];

		this.texCoords = [
			0, 1,
			1, 1,
			0, 0,
			1, 0,
		];

		this.initGLBuffers();
	};
};
