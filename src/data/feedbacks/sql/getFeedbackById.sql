SELECT [fb].[id], [fb].[user_id], [fb].[note], [u].fullname, [u].[avatar]
FROM [dbo].[feedbacks] as fb
INNER JOIN [dbo].[users] as u 
ON [u].[id] = [fb].[user_id]
WHERE [fb].[product_id]=@product_id