UPDATE [dbo].[users]
SET [deleted] = 0
WHERE [id]=@id

SELECT * FROM [dbo].[users] WHERE [id] = @id