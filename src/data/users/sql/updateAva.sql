UPDATE [dbo].[users]
SET [avatar]=@img
WHERE [id]=@id

SELECT * FROM [dbo].[users]
WHERE [id]=@id