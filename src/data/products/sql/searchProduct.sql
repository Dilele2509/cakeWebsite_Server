SELECT [title], [thumbnail], [id]
FROM [dbo].[products] 
WHERE [title] LIKE @title;