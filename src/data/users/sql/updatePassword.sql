UPDATE [dbo].[users]
SET [password]=@password
WHERE [id]=@id

SELECT * FROM [dbo].[users]
WHERE [id]=@id