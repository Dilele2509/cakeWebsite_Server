UPDATE [dbo].[products]
SET [deleted] = 1
WHERE [id]=@id

SELECT * FROM [dbo].[products] WHERE [id]=@id