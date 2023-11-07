UPDATE [dbo].[products]
SET [size]=@size
WHERE [id]=@id;

SELECT * FROM [dbo].[products]
WHERE [id]=@id