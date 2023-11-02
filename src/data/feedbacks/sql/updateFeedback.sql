UPDATE [dbo].[feedbacks]
SET [user_id]=@user_id,
    [fullname]=@fullname,
    [email]=@email,
    [phone_number]=@phone_number,
    [note]=@note
WHERE [id]=@id

SELECT * FROM [dbo].[feedbacks]
WHERE [id]=@id