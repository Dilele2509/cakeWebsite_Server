UPDATE [dbo].[category]
SET [name]=@name
WHERE [id]=@id

SELECT * FROM [dbo].[category]
WHERE [id]=@id