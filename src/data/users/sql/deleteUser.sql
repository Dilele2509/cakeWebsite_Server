UPDATE [dbo].[users]
SET [deleted] = 1
WHERE [id]=@id

SELECT * FROM [dbo].[users] WHERE [id]=@id

