UPDATE [dbo].[products]
SET [thumbnail]=@thumbnail
WHERE [id]=@id

SELECT * FROM [dbo].[users]
WHERE [id]=@id