UPDATE [dbo].[products]
SET [deleted] = 0
WHERE [id]=@id

SELECT * FROM [dbo].[products] WHERE [id]=@id