UPDATE [dbo].[users]
SET [avatar]=@avatar
WHERE [id]=@id

SELECT * FROM [dbo].[users]
WHERE [id]=@id